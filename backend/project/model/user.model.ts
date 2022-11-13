import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document { }

const UserSchema = new mongoose.Schema({}, {})

const User = mongoose.model<UserDocument>('UserTable', UserSchema)