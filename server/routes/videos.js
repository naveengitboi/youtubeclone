import express from 'express'
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/Video.js';
import { verify } from 'jsonwebtoken';


const router = express.Router();

router.post('/', addVideo)
router.put('/:id', updateVideo)
router.delete('/:id', verify, deleteVideo)
router.get('/:id', getVideo)


export default router