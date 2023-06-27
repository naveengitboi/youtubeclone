//routes folder

import express from 'express'
import { checking } from '../controllers/user.js';
const router = express.Router();


//testing user page

router.get('/test',checking )

export default router