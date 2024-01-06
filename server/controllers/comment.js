import express from 'express'

import Comments from '../models/Comments.js'
import Video from '../models/Video.js';
import { createError } from '../error.js';


export const addComment = async (req, res, next) => {
    try {
        console.log(req.body)
        const newComment = new Comments({ ...req.body, userId: req.user.id });
        const savedComment = await newComment.save();
        res.status(200).json(savedComment)
    } catch (error) {
        next(error)
    }

}



export const deleteComment = async (req,res, next) => {
    try {
        const comment = await Comments.findById(req.params.id);
        const video = await Video.findById(comment.videoId);

        if(req.user.id === comment.userId || req.user.id === video.userId){
            const deleteC = await Comments.findByIdAndDelete(req.params.id);
            res.status(200).send('Comment Deleted');
        }
        else{
            res.status(400).send('you cannot delete comment');
        }
    } catch (error) {
        next(error)
    }
}


export const getComments = async (req,res,next) => {
    try {
        const allComments = await Comments.find({videoId: req.params.videoId});
        res.status(200).json(allComments);
    } catch (error) {
        next(error)
    }
}