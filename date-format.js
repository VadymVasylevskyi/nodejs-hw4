const moment = require('moment');

const Date1 = moment().format('DD-MM-YYYY');
const Date2 = moment().format('MMM Do YY');
const Date3 = moment().format('dddd');

console.log('Текущая дата в формате DD-MM-YYYY:', Date1);
console.log('Текущая дата в формате MMM Do YY:', Date2);
console.log('Текущий день недели:', Date3);
