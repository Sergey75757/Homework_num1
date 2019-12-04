let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
                    money,
                    time, 
                    expenses : {}, 
                    optionalExpenses : {},
                    income : [],
                    savings : false
               };

let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется");

appData["expenses"] = {
    [answer1] : answer2
};

var money_day = money / 30;
alert('Ваш приблизительный бюджет на день: ' + money_day);

console.log(appData);