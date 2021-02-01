//Helper event function, event array
const randomEventIndex = () => {
    return Math.floor(Math.random() * 10);
}
const events = [''];

//Calculate current date, months array
const currentDate = new Date (Date.now());
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//Generate random date
const generateRandomYear = () => {
    let year = currentYear;
    const yearsToGo = Math.floor(Math.random() * 11);
    year += yearsToGo;
    return year;
}

const generateRandomMonth = (year) => {
    let minMonth = 0;
    if (year === currentYear) {
        minMonth = currentMonth;
    };
    const month = Math.floor(Math.random() * (12 - minMonth) + minMonth);
    return month;
}

const generateRandomDay = (month, year) => {
    let days = 31
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        days = 30;
    } else if (month === 1 && year % 4 === 0) {
        days = 29;
    } else if (month === 1 && year % 4 !== 0) {
        days = 28;
    }
    let minDay = 0;
    if (year === currentYear && month === currentMonth) {
        minDay = currentDay;
    };
    const day = Math.floor(Math.random() * (days - minDay) + minDay + 1);
    return day;
}

