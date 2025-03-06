import express from "express";
import prisma from "../prisma/prisma";
import { randomUUID } from "crypto";
import authMiddleware from "../middleware";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../utils/types";
import logger from "../utils/loggint";

const router = express.Router();

/**
 * @route   POST /post/create
 * @desc    Create a new post (Authenticated Users Only)
 */
router.post("/create", authMiddleware, async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const userId = (req as AuthenticatedRequest).user;
        logger.info("create post request from ",userId);
        if (!title || !content) {
            res.status(400).json({ error: "Title and content are required" });
            return;
        }

        const post = await prisma.post.create({
            data: {
                id: randomUUID(),
                title,
                content,
                authorId: userId
            }
        });

        res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
});

/**
 * @route   GET /post/random
 * @desc    Get 5 random posts (Authenticated Users Only)
 */
router.get("/random", async (req: Request, res: Response) => {
    try {
        const count = await prisma.post.count();
        const randomPosts = await prisma.post.findMany({
            take: 5,
            skip: Math.max(0, Math.floor(Math.random() * (count - 5))),

            select: {
                title: true,
                content: true, 
            },
            orderBy: { createdAt: "desc" },
        });

        const formattedPosts = randomPosts.map(post => ({
            title: post.title,
            wordCount: post.content.split(/\s+/).filter(Boolean).length, 
        }));

        res.status(200).json(formattedPosts);
    } catch (error) {
        console.error("Error fetching random posts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

/**
 * @route   GET /post/user
 * @desc    Get all posts by the authenticated user
 */
router.get("/posts", authMiddleware, async (req: Request, res: Response) => {
    try {
        const { author } = req.query; 
        const posts = await prisma.post.findMany({
            where: author ? { authorId: author as string } : undefined,
            orderBy: { createdAt: "desc" },
        });

        if (posts.length === 0) {
            res.status(404).json({ message: "No posts found" });
            return;
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


export default router;
