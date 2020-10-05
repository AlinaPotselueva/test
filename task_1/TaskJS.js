'use strict';
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let a =  prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");
let c = prompt("Введите обязательную статью расходов в этом месяце");
let d = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    };
appData.expenses.a = b;
appData.expenses.c = d;
console.log(appData);


