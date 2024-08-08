import express from "express";
import cors from "cors";
import middlewareLogger from "./middleware/middleware";
import taskRoute from "./routes/tasksRoute";
import connectDB from "./config/db";
import { TaskMiddleWare } from "./middleware/taskMiddleware";

const app = express();
const port = 8000;

// Middleware
app.use(middlewareLogger);
app.use(cors());
app.use(express.json());
app.use(TaskMiddleWare)

// Route
app.use("/api/tasks", taskRoute);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`port is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
