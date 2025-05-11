import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bagalomkar945:EcsYQJelDy7CfBB5@cluster0.wytms5c.mongodb.net/job');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;