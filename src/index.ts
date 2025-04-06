import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/index.js";
import Logger from "./utils/logger.js";

dotenv.config({
    path: ".env",
});

const PORT = process.env.PORT ?? 8000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            Logger.info(`Server is running on port ${PORT}`, "Server");
        });
    } catch (error) {
        Logger.error(`Failed to start server: ${error}`, "Server");
        process.exit(1);
    }
};

startServer();
