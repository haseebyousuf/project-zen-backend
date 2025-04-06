import { Types } from "mongoose";
import { TaskStatusType, UserRoleType } from "../utils/constants.ts";

export namespace IProject {
    type Note = {
        _id: Types.ObjectId;
        project: Types.ObjectId;
        createdBy: Types.ObjectId;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    };
    type Project = {
        _id: Types.ObjectId;
        name: string;
        description: string;
        createdBy: Types.ObjectId;
        createdAt: Date;
        updatedAt: Date;
    };
    type ProjectMember = {
        _id: Types.ObjectId;
        user: Types.ObjectId;
        project: Types.ObjectId;
        role: UserRoleType;
        createdAt: Date;
        updatedAt: Date;
    };
    type Task = {
        _id: Types.ObjectId;
        title: string;
        description: string;
        project: Types.ObjectId;
        assignedTo: Types.ObjectId;
        assignedBy: Types.ObjectId;
        status: TaskStatusType;
        attachments: {
            url: string;
            mimetype: string;
            size?: string;
        }[];
        createdAt: Date;
        updatedAt: Date;
    };
    type SubTask = {
        _id: Types.ObjectId;
        title: string;
        task: Types.ObjectId;
        isCompleted: boolean;
        createdBy: Types.ObjectId;
        createdAt: Date;
        updatedAt: Date;
    };
    type User = {
        _id: Types.ObjectId;
        avatar: {
            url: string;
            localPath: string;
        };
        username: string;
        email: string;
        fullname: string;
        password: string;
        isEmailVerified: boolean;
        forgotPasswordToken?: string;
        forgotPasswordExpiry?: Date;
        refreshToken?: string;
        emailVeificationToken?: string;
        EmailVerificationExpiry?: Date;
        createdAt: Date;
        updatedAt: Date;
    };
}
