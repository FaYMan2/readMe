import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "./utils/types"; // Ensure correct import
import logger from "./utils/loggint";
import dotenv from 'dotenv';


dotenv.config();
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        res.status(401).json({ error: "Access denied, token missing" });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        logger.info("User authenticated: ", decoded.id);
        (req as AuthenticatedRequest).user = decoded.id;  
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid or expired token" });
        return;
    }
};

export default authMiddleware;
