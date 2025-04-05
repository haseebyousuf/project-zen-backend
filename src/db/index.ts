import mongoose from "mongoose";
import Logger from "../utils/logger.js";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        await mongoose.connect(mongoUri);
        Logger.info("Database Connected", "Database");
    } catch (error) {
        Logger.error(`${error}`, "Database");
        process.exit(1);
    }
};

export default connectDB;
