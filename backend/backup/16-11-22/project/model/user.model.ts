import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    name: string;
    phone: number;
    email: string;
    password: string;
}


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
}, { timestamps: true })



const User = mongoose.model<UserDocument>('UserTable', UserSchema)