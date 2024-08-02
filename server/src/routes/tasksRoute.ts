import express from "express";
import { createTask, getTasks, updateTask } from "../controllers/Tasks";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.patch("/:id", updateTask)

export default router;