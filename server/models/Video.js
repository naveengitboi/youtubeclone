//schema

import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
    userId:{
        type: String,
        unique: true 
    },
    title:{
        type: String
    },
    description:{
        type:String
    },
    imgUrl:{
        type: String
    },
    videoUrl: {
        type: String 
    },
    likes: {
        type:Number,
        default: []
    },
    disLikes: {
        type: Number,
        default: []
    },
    views:{
        type:Number, 
        default:0
    },
    tags: {
        type: [String],
        default: []
    }



}, {timestamps: true})


export default mongoose.model('Video', VideoSchema)


//schema