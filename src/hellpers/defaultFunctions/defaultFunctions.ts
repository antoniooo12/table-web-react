function fixHour(hour: number ){
    return hour.toString().length === 1 ? `0${hour}`: hour
}

function fixMinute(minute: number ){
    return minute.toString().length === 1 ? `0${minute}`: minute
}

export const defaultFunctions = {
    currentData: () => new Date().toLocaleDateString('en-CA'),
    currentHour: () => {
        const {hour, minute} = {hour: fixHour(new Date().getHours()), minute: fixMinute(new Date().getMinutes())}
        return `${hour}:${minute}`
    },
}