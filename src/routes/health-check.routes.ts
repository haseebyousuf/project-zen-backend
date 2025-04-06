import { Router } from "express";
import { healthCheck } from "../controller/health-check.controller.js";

const router = Router();

router.get("/", healthCheck);

export default router;
