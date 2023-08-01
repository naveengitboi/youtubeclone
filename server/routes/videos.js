import express from 'express'
import { addVideo, deleteVideo, getVideo, random, sub, trend, updateVideo, view } from '../controllers/Video.js';
import { verify } from 'jsonwebtoken';


const router = express.Router();

router.post('/', addVideo)
router.put('/:id', updateVideo)
router.delete('/:id', verify, deleteVideo)
router.get('/find/:id', getVideo)
router.put('/view/:id', view)
router.get('/trend', trend)
router.get('/random', random)
router.get('/sub',verify, sub)

export default router