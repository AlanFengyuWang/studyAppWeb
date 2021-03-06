//progress
export interface IProgress {
    timeType: "Today" | "This week" | "This month"
    progress: number
}

//tasks
export type TaskType = "Work" | "Exercise" | "Entertainment" | "Others" | "Study";
export type SchedulePeriod = "Morning" | "Afternoon" | "Evening";
export type ScheduleTimeType = {startingTime: Date | SchedulePeriod, endingTime: Date | SchedulePeriod}[];
export type TaskFormValues = {
  _id: string;
  taskTitle: string;
  taskDescription: string;
  type: TaskType;
  due: Date;
  scheduleTime: ScheduleTimeType;
  milestones: {milestone: Date}[];
  subtask: { _id: string; title: string; description: string }[];
};


//users
export type UserInfo = {
  name: { first: string, last: string },
      email: string,
      image: string,
}