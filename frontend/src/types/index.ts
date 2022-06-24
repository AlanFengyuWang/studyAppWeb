//progress
export interface IProgress {
    timeType: "Today" | "This week" | "This month"
    progress: number
}

//tasks
export type TaskType = "Work" | "Exercise" | "Entertainment" | "Others" | "Study";
export type FormValues = {
  _id: string;
  taskTitle: string;
  taskDescription: string;
  type: TaskType;
  due: Date;
  subtask: { _id: string; title: string; description: string }[];
};