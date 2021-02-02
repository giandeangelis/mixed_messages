//Helper fact function, fact array
const randomFactIndex = () => {
    return Math.floor(Math.random() * 10);
}
const factArray = ['You will win the lottery',
                'You will suffer a serious accident',
                'You will find the love of your life',
                'You will suffer a terrible loss',
                'You will realise what your purpose is',
                'You will get a promotion',
                'Your car will stop working',
                'You will get an important enlightenment',
                'You will buy a new house',
                'You will receive an unexpected inheritance'];

//Calculate current date, months array
const currentDate = new Date (Date.now());
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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

//Generate likelihood between 50% and 100%
const generateLikelihood = () => Math.floor(Math.random() * 51 + 50);

//Generate message
const generateMessage = () => {
    const fact = factArray[randomFactIndex()];
    const year = generateRandomYear();
    const month = monthArray[generateRandomMonth(year)];
    const day = generateRandomDay(month, year);
    const date = `${day} of ${month} ${year}`;
    const likelihood = generateLikelihood();
    const message = `${fact} on the ${date} and I am ${likelihood}% sure...`;
    return message;
}