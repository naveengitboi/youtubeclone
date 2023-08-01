import express from 'express'
import Video from '../models/Video.js'
import { createError } from '../error.js'
//add video
export const addVideo = async (req,res,next) => {
    const newVideo = new Video({userId : req.user.id, ...req.body})
    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo)
    } catch (error) {
        next(error)
        
    }
}

//update video
export const updateVideo = async (req,res,next) => {
    try {
        const video = Video.findById(req.params.id)
        if (!video) {
            return next(createError(404, "Video not found"))
        }
        if(req.user.id === video.userId){
            const updateVideo = Video.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
            res.status(200).json(updateVideo)
        }
        else{
            next(createError(403, "You can only edit your video"))
        }
    } catch (error) {
        next(error)
    }
}

//deleteVideo
export const deleteVideo = async (req,res,next) => {

}

//get Video
export const getVideo = async (req,res,next) => {

}