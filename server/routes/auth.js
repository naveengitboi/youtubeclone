import express from 'express'
import { signIn, signUp } from '../controllers/auth.js'

const router = express.Router();
//create user


router.post('/signup', signUp)

//sign in 
router.post('/signin', signIn)

//google 
// router.post('/google')
export default router;