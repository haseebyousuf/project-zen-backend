import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("Database Connected");
    } catch (error) {
        console.error(`Failed to connect to db ERROR: ${error}`);
        process.exit(1);
    }
};

export default connectDB;
