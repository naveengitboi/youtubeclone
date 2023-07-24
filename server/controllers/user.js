import express from 'express'
import { createError } from '../error.js'
import User from '../models/User.js'


//updat  user details
export const update = async (req,res, next) => {
    if(req.params.id ===  req.user.id){
        try {
            const updateUser = await User.findByIdAndUpdate(
                {"_id": req.params.id},
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

    await User.findByIdAndDelete(
        {
            "_id":req.params.id
        }
    )
    res.status(200).send("User Deleted from database")

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

