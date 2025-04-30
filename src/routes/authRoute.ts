
import { signup, login as loginHandler } from "../controllers/authController";
import express from "express";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginHandler);

export default router;