import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required: true
    }
})