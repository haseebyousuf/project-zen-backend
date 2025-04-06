import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.js";

const noteSchema = new Schema<IProject.Note>(
    {
        project: {
            types: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        createdBy: {
            types: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Note: mongoose.Model<IProject.Note> = mongoose.model(
    "Note",
    noteSchema,
);
