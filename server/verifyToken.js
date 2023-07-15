import jwt from 'jsonwebtoken'
import { createError } from './error,js';


export const verifiedToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if(token == null) {
        return next(createError(404, "You are not authorised to do this functioning"))
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        console.log(user)
        if(err) {
            return next(createError(400, "timeout, do login again"))
        }

        req.user = user;
        next();
    })

}