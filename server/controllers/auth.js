import express from 'express'
import mongoose from 'mongoose'

//pasword bcrypt library
import bcrypt from 'bcrypt'

//mongodb model
import User from '../models/User.js'

//jwt import 
import jwt from 'jsonwebtoken'

//controller auth
//custom error
import { createError } from '../error.js'

export const signUp = async (req, res, next) => {

    try {
        // const originalPwd = req.body.password

        const salt = bcrypt.genSaltSync(10)
        const hashingPwd = bcrypt.hashSync(req.body.password, salt)

        const newUser = await new User({ ...req.body, password: hashingPwd })
        await newUser.save()
        res.status(200).send("User saved to database :) ")

    } catch (error) {
        next(error)
    }

}


//sign in

export const signIn = async (req, res, next) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user != null) {
            const dbPasword = await user.password
            const comparingPwd = await bcrypt.compare(password, dbPasword)

            //comparing password -> then wt to do
            if (comparingPwd) {

                const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)

                const { password, ...otherDetails } = user._doc
                res.cookie("access_token", token, {
                    httpOnly: true
                }).status(200).json(otherDetails)

            }
            else {
                return next(createError(504, "enter valie credintials"))
            }
        }
        else {
            return next(createError(404, "user not found brother in law"))
        }

    } catch (error) {
        next(error)
    }
}