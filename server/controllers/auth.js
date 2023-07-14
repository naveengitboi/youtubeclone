import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User.js'
export const signUp = async (req,res) => {


    // console.log(req.body)
    try {
        const newUser = await new User(req.body)
       console.log(newUser)
    } catch (error) {
        console.log(error) 
    }
}
export const signIn = async (req,res) => {
    try {
        const newUser = await new User()
        console.log(newUser)
    } catch (error) {
        console.log(error) 
    }
}