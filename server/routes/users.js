//routes folder

import express from 'express'
import { userController } from '../controllers/user.js';
const router = express.Router();


//testing user page

router.get('/test',userController )

export default router