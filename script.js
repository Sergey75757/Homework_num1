let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    dataTime: time, 
    expenses : {}, 
    optionalExpenses : {},
    income : [],
    savings : false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = prompt("Во сколько обойдется"),

appData["expenses"] = {
    [answer1] : answer2
};
appData["expenses"] = {
    [answer3] : answer4
};

var money_day = money / 30;
alert('Ваш приблизительный бюджет на день: ' + money_day);