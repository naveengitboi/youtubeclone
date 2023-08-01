import express from 'express'
import Video from '../models/Video.js'
import User from '../models/User.js'
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
        const video = await Video.findById(req.params.id)
        if (!video) {
            return next(createError(404, "Video not found"))
        }
        if(req.user.id === video.userId){
            const updateVideo = await Video.findByIdAndUpdate(req.params.id, {
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
    try {
        const video = await Video.findById(req.params.id)
        if(!video) {
            return next(createError(2400, "Video not exist"))
        }
        if(req.user.id == video.userId){
            const deletVideo = await Video.findByIdAndDelete(req.params.id)

            res.status(200).send("Video is deleted")
        }
        else{
            next(createError(400,"You can only delete your videos"))
        }
    } catch (error) {
        next(error)
    }
}

//get Video
export const getVideo = async (req,res,next) => {
    try {
        const video = await Video.findById(req.params.id)
        if(!video) {
            return next(createError(400, "Video not found"))
        }

        res.status(200).json(video)
    } catch (error) {
        next(error)
    }
}

export const view = async (req,res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views:1}
        })

        res.status(200).send("Increment views")
    } catch (error) {
        next(error)
    }
}

export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{$sample:{size:40}}])

        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const trend = async (req,res, next) => {
    try {
        const videos = await Video.find().sort({views:-1})
        //-1 greater in views

        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}
export const sub = async (req,res, next) => {
    try {
     const user = await User.findById(req.user.id)
     const subscibeChannels = user.subscribedUsers;
     const list = Promise.all(
        subscibeChannels.map(channelId => {
            return Video.findById({userId:channelId})
        })
     )

     res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}