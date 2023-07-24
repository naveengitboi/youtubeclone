import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = ( req, res, next) => {
    const token = req.cookies.access_token;

    if(!token) return next(createError( 401, "not authorised user"))

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err) return next(createError(408,"Token expoired please login again"))
        req.user = user
        next()
    })
} 

