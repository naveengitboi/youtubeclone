import express from 'express'

const router = express.Router()
import { deleteUser, dislikevideo, getuser, likeVideo, update } from '../controllers/user.js'
import verifiedToken  from '../verifyToken.js'


//update user 
router.put('/:id', verifiedToken, update)


//delete user 
router.delete('/:id', deleteUser)


//like video
router.put('/like/:videoId', likeVideo)

//dislike video
router.put('/dislike/:videoId', dislikevideo)

//getUser
router.get('/find/:id', getuser)

//subscribe channel
router.put('/sub/:id', getuser)

//unsubscribe channel
router.put('/unsub/:id', getuser)



//export all routers
export default router