import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        reqiured: true,
        unique: true,
        Lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        reqiured: true,
        unique: true,
        Lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        reqiured: true,
        index: true
    },
    avtar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    refreshToken: {
        type: String,

    },
},
    {
        timestamps: true
    }

);



export const User = mongoose.model("User", userSchema); 