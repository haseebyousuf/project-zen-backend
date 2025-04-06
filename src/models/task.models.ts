import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.js";
import { TaskStatus } from "../utils/constants.js";

const taskSchema = new Schema<IProject.Task>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        assignedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        status: {
            type: String,
            enum: TaskStatus,
            default: TaskStatus.TODO,
        },
        attachments: {
            type: [
                {
                    url: String,
                    mimetype: String,
                    size: String,
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    },
);

export const Task = mongoose.model<IProject.Task>("Task", taskSchema);
