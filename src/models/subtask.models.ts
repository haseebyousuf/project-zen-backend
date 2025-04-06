import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.js";

const subtaskSchema = new Schema<IProject.SubTask>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: "Task",
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true },
);

export const SubTask = mongoose.model<IProject.SubTask>(
    "SubTask",
    subtaskSchema,
);
