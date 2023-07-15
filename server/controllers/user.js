import express from 'express'
import { createError } from '../error.js'
import User from '../models/User.js'
// import mongoose from 'mongoose'

export const update = async (req,res, next) => {
    console.log(req.params)
    console.log(req.user.id)
    if(req.params.id === req.user.id){
        console.log(true)
        try {
            const udpateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
        } catch (error) {
            next(createError(404, "something went wrong bro"))
        }
    }
    else{
        return next(createError(400, "you are not owner"))
    }
}
export const deleteUser= (req,res, next) => {

}
export const subscribe = (req,res, next)=>{
    
}
export const unsubscribe= (req,res, next)=>{
    
}

export const likeVideo= (req,res, next)=>{
    
}

export const dislikevideo= (req,res, next)=>{
    
}

export const getuser= (req,res, next)=>{
    
}

