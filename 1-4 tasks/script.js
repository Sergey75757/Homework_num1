'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

start();

let appData = {
    budget: money,
    dataTime: time, 
    expenses : {}, 
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется", '');
                if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' 
                && b != '' && a.length < 50) {

                console.log("done");

                appData.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncore = save/100/12*percent;
            alert("Доход в месяц с вашего депазита: " + appData.monthIncore);
        }
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++){
            let OptExpenses = prompt("Статья необязательных расходов", '');

            if ( (typeof(OptExpenses)) === 'string' && (typeof(OptExpenses)) != null
            && OptExpenses != '' && OptExpenses.length < 50) {
                appData.optionalExpenses[i] = OptExpenses;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что приносит дополнительный доход? (Перечисливать через запятую и пробел)", '');

            if ( (typeof(items)) === 'string' && (typeof(items)) != null
            && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
                
                appData.income.forEach(function(item, i) {
                console.log(i + 1 + ' cпособ доп. заработка: ' + item)
                });
            } else {
                i--;
            }
        }
    }
};