import express from 'express'
import { createError } from '../error.js'
import User from '../models/User.js'


//updat  user details
export const update = async (req,res, next) => {
    if(req.params.id ===  req.user.id){
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new:true}
        )

            res.status(200).json(updateUser)
        } catch (error) {
            next(createError(404, error.message))
        }
    }
    else{
        next(createError(400, "Authorise first bamardhi "))
    }
}

//delete user from data base
export const deleteUser= async (req,res, next) => {
    if(req.user.id === req.params.id){
       try {
         await User.findByIdAndDelete(req.params.id )

        res.status(200).send("User deleted succesfully dear uncle")
       } catch (error) {
        return next(400, "Please go and sign in again as token in expired")
       }
    }else{
        return next(createError(408,"You cannot delete others account dear"))
    }

}


//subscribe user

export const subscribe = async (req,res, next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push:{subscribedUsers:req.params.id}
        })

        await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscibers: 1}
        })
        res.send("Subscribed User Successfully")
    } catch (error) {
        return next(error)
    }
}

//unsub user
export const unsubscribe= async (req,res, next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id, 
            {$pull: {subscribedUsers: req.params.id}}
            )
        
        await User.findByIdAndUpdate(req.params.id, 
            {$inc:{ subscibers:-1}}
            )

        res.send("Unsub successfully")

    } catch (error) {
        return next(error)
    }
}

//like video
export const likeVideo= (req,res, next)=>{
    
}
//dislike video
export const dislikevideo= (req,res, next)=>{
    
}

//get user details

export const getuser= async (req,res, next)=>{
    try {
        const userDetails = await User.findById(req.params.id)

        res.status(200).json(userDetails)
    } catch (error) {
        next(error)
    }
}

