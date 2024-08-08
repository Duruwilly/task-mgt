import express from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/Tasks";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask)

export default router;