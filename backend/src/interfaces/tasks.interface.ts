export interface Task {
    id: string;
    taskTitle: string;
    taskDescription: string;
    type: "Work" | "Exercise" | "Entertainment" | "Others";
    due: Date;
    scheduleTime: Date;
}