const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");
const GROQ_API = process.env.GROQ_API_KEY;

const client = new Groq({
    apiKey: GROQ_API,
});

router.post('/', async (req, res) => {
    try {
        const {message} = req.body;

        const response = 
            await client.chat.completions.create({
                model: "llama-3.1-8b-instant",
                messages:[
                    {
                        role: "system",
                        content: "You are a grocery shopping assistant. Help users with groceries, recipes, and healthy food suggestions.",
                    },
                    {
                        role:"user",
                        content: message,
                    },
                ]
            });

            res.json({
                reply:
                    response.choices[0].message.content,
            })
    } catch (error) {
        console.log("Chatbot Error: ", error);
        res.status(500).json({
            message:"Chatbot Error"
        });
    }
});

module.exports = router;