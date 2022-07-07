export function isMorning(date: Date) {
    return date.getHours() >= 4 && date.getHours() <= 12;
  }
  
export function isAfternoon(date: Date) {
    return date.getHours() > 12 && date.getHours() <= 18;
}

export function isEvening(date: Date) {
    return date.getHours() > 18 && date.getHours() <= 4;
}
  
export const isToday = (someDate: Date) => {
    const today = new Date();
    return (
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
    );
};
  
export const beforeToday = (someDate: Date) => {
    const today = new Date();
    return (
        someDate.getDate() < today.getDate() &&
        someDate.getMonth() <= today.getMonth() &&
        someDate.getFullYear() <= today.getFullYear()
    );
};