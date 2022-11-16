export interface Task {
    id: string;
    title: string;
    description: string;
    type: "Work" | "Exercise" | "Entertainment" | "Others";
    due: string;
    startingTime: string;
}