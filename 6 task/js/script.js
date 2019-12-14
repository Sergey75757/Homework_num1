let menuItem = document.createElement('li'),
    newMenuitem_2 = document.createElement('li'),
    menuItems = document.querySelectorAll('.menu-item');
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    ask = prompt('Какое у вас отношение к технике Apple?', ''),
    ans = document.querySelector('.prompt');

menu.removeChild(menuItems[2]);
menu.insertBefore(menuItems[2], menuItems[1]);

menuItem.classList.add('menu-item');
menuItem.innerHTML = 'Пятый пункт';
menu.appendChild(menuItem);

document.body.style.background = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

ans.innerHTML = ask;