import dotenv from 'dotenv';
import { Router } from 'express';
import logger from '../utils/loggint';
import authMiddleware from '../middleware';
import prisma from '../prisma/prisma';

dotenv.config();
const router = Router();

router.post("/",authMiddleware, async (req, res) => {
    try {   
        const { id, voice } = req.body;
        logger.info("tts request for: ", id);
        if (!id) {
            res.status(400).json({ error: "id is required" });
            return;
        }
        const Blogcontent = await prisma.post.findFirst({
            where : {
                id
            },select : {
                content : true,
                title : true
            }
        })
        if(!Blogcontent){
            res.status(400).json({error : "blog not found"})
            return;
        }

        const parseMarkdown = (md : string) => {
            return md
                    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links but keep text inside []
                    .replace(/#/g, '') // Remove all '#' characters
                    .replace(/\n/g, '...'); // Convert new lines to '...'
        }

        const model = voice === 'female' ? 'aura-athena-en' : 'aura-orpheus-en';
        const blogRawText = 'Title,' + Blogcontent.title + '...,...' +'Content of the Blog,    ' + parseMarkdown(Blogcontent.content);
        const deepgramUrl = `https://api.deepgram.com/v1/speak?model=${model}`;
        const deepgramApiKey = process.env.DEEPGRAM_API_KEY;
        const options = {
            method : 'POST',
            headers : {
                Authorization : `Token ${deepgramApiKey}`,
                'Content-Type' : 'application/json' 
            },  
            body : JSON.stringify({
                text : blogRawText
            })
        }
        const response = await fetch(deepgramUrl, options);
        logger.info("request sent to deepgram");
        if(!response.ok) {
            logger.error("Error creating post");
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        logger.info("GOT response from deepgram")
        const audioBuffer = await response.arrayBuffer()
        logger.success("200 - TSS generating successfully")
        res.setHeader('Content-Type', 'audio/mpeg');
        res.status(200).send(Buffer.from(audioBuffer));
    }
    catch (err : any) {
        logger.error("Error creating post:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
});

export default router;