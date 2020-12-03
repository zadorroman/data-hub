'use strict';

(function () {

    //open windows    
    let openBtn = document.querySelector('.header__link');

    openBtn.addEventListener('click', callBtn);
    let rentBtns = document.querySelectorAll('.subscriptions__link');
    rentBtns.forEach((elem) => {
        elem.addEventListener('click', rentBtnFun);
    })


    //close windows
    let closelBtn = document.querySelector('.call__close'),
        sendBtn = document.querySelector('.call__btn'),
        closelBtnRent = document.querySelector('.call__close--rent'),
        sendBtnRent = document.querySelector('.call__btn--rent');

    closelBtn.addEventListener('click', callBtn);
    sendBtn.addEventListener('click', callBtn);
    closelBtnRent.addEventListener('click', rentBtnFun);
    sendBtnRent.addEventListener('click', rentBtnFun);
})();



function callBtn() {
    let call = document.querySelector('.call');
    if (call.style.display === 'none' || call.style.display === '') {
        call.style.display = 'block';
    } else {
        call.style.display = 'none';
    }
}

function rentBtnFun() {
    let call = document.querySelector('.call--rent');

    if (call.style.display === 'none' || call.style.display === '') {
        call.style.display = 'block';
    } else {
        call.style.display = 'none';
    }
}

let itemCheckbox = document.getElementById('day'),
    itemCheckboxShu = document.getElementById('wensday');
itemCheckbox.addEventListener('change', chngeRadio);
itemCheckboxShu.addEventListener('change', chngeRadio);

function chngeRadio() {
    let Price = document.querySelector('.subscriptions__price'),
        list = document.querySelector('.subscriptions__list'),
        listFirst = document.querySelector('.subscriptions__list--first');
    if (itemCheckbox.checked) {
        list.style.display = 'none';
        listFirst.style.display = 'block';
        Price.textContent = '200 грн / день';
    } else if (itemCheckboxShu.checked) {
        Price.textContent = '1 800 грн / неделя';
        list.style.display = 'block';
        listFirst.style.display = 'none';
    }
}
