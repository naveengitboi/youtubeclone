//schema

import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    videoId: { 
        type: String,
        unique : true
    },
    comment: {
        type: String
    }
},  {timestamps: true});


export default mongoose.model('Comment', CommentSchema);

//schema