import express from "express";
import healthCheckRouter from "./routes/health-check.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
export default app;
