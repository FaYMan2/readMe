import dotenv from 'dotenv';
import { Router } from 'express';
import logger from '../utils/loggint';
import authMiddleware from '../middleware';

dotenv.config();
const router = Router();

router.post("/",authMiddleware, async (req, res) => {
    try {   
        const { text } = req.body;
        logger.info("tts request for: ", text);
        if (!text) {
            res.status(400).json({ error: "Text is required" });
            return;
        }
        const deepgramUrl = 'https://api.deepgram.com/v1/tts';
        const deepgramApiKey = process.env.DEEPGRAM_API_KEY;
        const options = {
            method : 'POST',
            headers : {
                Authorization : `Token ${deepgramApiKey}`,
                'Content-Type' : 'application/json'
            },
            body : {
                "text" : JSON.stringify({text})
            }
        }
        const response = await fetch(deepgramUrl, options);
        const data = await response.json();
        if(!response.ok) {
            logger.error("Error creating post:", data);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        const audioBuffer = await response.arrayBuffer()
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