//progress
export interface IProgress {
    timeType: "Today" | "This week" | "This month"
    progress: number
}

//tasks
export type TaskType = "Work" | "Exercise" | "Entertainment" | "Others" | "Study";
export type SchedulePeriod = "Morning" | "Afternoon" | "Evening";
export type ScheduleTime = {startingTime: Date, endingTime: Date};
export type TaskFormValues = {
  _id: string;
  taskTitle: string;
  taskDescription: string;
  type: TaskType;
  due: Date;
  scheduledPeriod: SchedulePeriod;
  scheduledTime: ScheduleTime;
  milestones: {milestone: Date}[];
  isDone: boolean;
  subtask: { title: string; description: string }[];
};


//users
export type UserInfo = {
  name: { first: string, last: string },
      email: string,
      image: string,
}