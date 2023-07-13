import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User.js'
export const signUp = async (req,res) => {
    try {
        const newUser   = await new User()
    } catch (error) {
        console.log(error) 
    }
}
