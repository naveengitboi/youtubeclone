import express from 'express'
import { createError } from '../error.js'
import User from '../models/User.js'
// import mongoose from 'mongoose'

export const update = async (req,res, next) => {
    const updateData = await User.findByIdAndUpdate({   "_id":req.params.id}, 
        {
            $set :req.body
        })
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

