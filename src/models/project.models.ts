import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.js";

const projectSchema = new Schema<IProject.Project>(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Project = mongoose.model<IProject.Project>(
    "Project",
    projectSchema,
);
