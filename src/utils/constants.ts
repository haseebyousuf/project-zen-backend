export enum UserRole {
    ADMIN = "admin",
    Project_ADMIN = "project_admin",
    MEMBER = "member",
}

export enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done",
}

export type UserRoleType = `${UserRole}`;

export type TaskStatusType = `${TaskStatus}`;

export const AvailableUserRoles: UserRoleType[] = Object.values(UserRole);

export const AvailableTaskStatus: TaskStatusType[] = Object.values(TaskStatus);
