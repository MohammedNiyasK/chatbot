import express from 'express'
const router = express.Router()

import { createPost,getChat } from '../controllers/chat.controller.js'

router.post('/chat',createPost);
router.get('/chat',getChat);

export default router;