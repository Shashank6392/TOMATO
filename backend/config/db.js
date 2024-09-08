import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aman702:Amansahu007@cluster0.j15e7jm.mongodb.net/TOMATO')
    .then (() => console.log("DB CONNECTED"));
}