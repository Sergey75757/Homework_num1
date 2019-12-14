let startBtn = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.getElementsByClassName('.expenses-item');

let expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('.choose-income'),
    savings = document.querySelector('.savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document = querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');