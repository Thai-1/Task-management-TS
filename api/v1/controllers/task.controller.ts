import {Request, Response} from "express";

import Task from "../models/task.model"

export const index = async(req: Request, res: Response) => {
    const tasks = await Task.find({
        deleted: false
    })
    res.json(tasks)
}

export const detail = async(req: Request, res: Response) => {
    const task = await Task.find({
        deleted: false,
        _id: req.params.id
    })
    res.json(task)
}