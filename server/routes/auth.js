import express from 'express'
import {} from '../controllers/auth.js'


const router  = express.Router();
//create user


router.post('/signup', (req,res) => {
    res.send(req.body)

} )

//sign in 
router.post('/signin', )

//google 
router.post('/google')
export default router;