'use strict';

let startBtn = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.getElementsByClassName('expenses-item');

let expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц", '');
    }
    appData.budget = money;
    appData.dataTime = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    expensesBtn.addEventListener('click', function() {
        let amount = 0;

        for (let i = 0; i < expensesItem.length; i++){
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                amount += +b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        }
        expensesValue.textContent = amount;
    });

    optionalexpensesBtn.addEventListener('click', function() {
        for (let i = 0; i <= optionalexpensesItem.length; i++){
            let OptExpenses = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = OptExpenses;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBtn.addEventListener('click', function() {
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;
            daybudgetValue.style.color = '#61a654';
            
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            daybudgetValue.textContent = 'Произошла ошибка';
            daybudgetValue.style.color = '#ff62a1';
        }
    });

    income.addEventListener('input', function() {
        let items = income.value;
            appData.income = items.split(', ');
        
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
                
            appData.monthIncore = sum/100/12*percent;
            appData.yearIncore = sum/100*percent;

            monthsavingsValue.textContent = +appData.monthIncore.toFixed(1);
            yearsavingsValue.textContent = +appData.yearIncore.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
                
            appData.monthIncore = sum/100/12*percent;
            appData.yearIncore = sum/100*percent;

            monthsavingsValue.textContent = +appData.monthIncore.toFixed(1);
            yearsavingsValue.textContent = +appData.yearIncore.toFixed(1);
        }
    });
});

let appData = {
    budget: money,
    dataTime: time, 
    expenses : {}, 
    optionalExpenses : {},
    income : [],
    savings : false
};