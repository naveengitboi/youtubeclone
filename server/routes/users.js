import express from 'express'

const router = express.Router()
import { deleteUser, dislikevideo, getuser, likeVideo, subscribe, unsubscribe, update } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

//update user 
router.put('/:id',verifyToken, update)

//delete user 
router.delete('/:id', verifyToken, deleteUser)


//subscribe channel
router.put('/sub/:id',verifyToken, subscribe)

//unsubscribe channel
router.put('/unsub/:id',verifyToken, unsubscribe)


//like video
router.put('/like/:videoId', verifyToken, likeVideo)

//dislike video
router.put('/dislike/:videoId',verifyToken, dislikevideo)


//getUser
router.get('/find/:id', getuser)


//export all routers
export default router