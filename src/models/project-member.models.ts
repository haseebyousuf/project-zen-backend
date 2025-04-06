import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.js";
import { AvailableUserRoles, UserRole } from "../utils/constants.js";

const projectMemeberSchema = new Schema<IProject.ProjectMember>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        role: {
            type: String,
            enum: UserRole,
            default: UserRole.MEMBER,
        },
    },
    { timestamps: true },
);

export const ProjectMember = mongoose.model<IProject.ProjectMember>(
    "ProjectMember",
    projectMemeberSchema,
);
