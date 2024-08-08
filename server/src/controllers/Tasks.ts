import { Request, Response, } from "express";
import { Task } from "../models/taskSchema";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    await newTask.save();
    return res.status(201).json(newTask);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completed, title } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { completed, title },
      { new: true }
    );
    res
      .status(200)
      .json(updatedTask);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const deleteTask = await Task.findByIdAndDelete(id)
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error: any) {
    throw new Error(error)
  }
}
