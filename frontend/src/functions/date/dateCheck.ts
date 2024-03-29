export function isMorning(date: Date) {
    return date.getHours() > 3 && date.getHours() < 12;
  }
  
export function isAfternoon(date: Date) {
    return date.getHours() >= 12 && date.getHours() < 18;
}

export function isEvening(date: Date) {
    return (!isAfternoon(date) && !isMorning(date) && isToday(new Date(date)));
}
  
export const isToday = (someDate: Date) => {
    const today = new Date();
    // console.log("someDate.getDate = " + JSON.stringify(someDate.getDate) + ", today.getDate = " + JSON.stringify(today.getDate));
    // console.log("here = " + today.getDate() + ", someDate.getDate) = " + someDate);
    
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