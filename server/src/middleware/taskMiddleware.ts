import { NextFunction, Request, Response } from "express";
import { Task } from "../models/taskSchema";

export const TaskMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await Task.find()
        console.log("tasks", tasks)
        next()
    } catch (error) {
        console.log("error",error);
        
    }
}