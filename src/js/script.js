window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Завдання 1. Годинник
    let dayNameHeader = document.querySelector('.day-name'),
        day = document.querySelector('.day'),
        month = document.querySelector('.month'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        function addZero(num) {
            if (num <=9 ) {   
                return '0' + num;  
            } else {     
                return num;    
            }
        }

        function updateTime() {
            let time = new Date();

            day.textContent = addZero(time.getDate());
            hours.textContent = addZero(time.getHours());
            minutes.textContent = addZero(time.getMinutes());

            for(let i = 0; i < 7; i++){
                if(time.getDay() == i){
                    dayNameHeader.textContent = daysName[i];
                }
            }

            for(let i = 0; i < 12; i++){
                if(time.getMonth() == i){
                    month.textContent = monthName[i];
                }
            }
        }

        setInterval(updateTime,1000);

    //Завдання 2. Зміна фону
    let imageContainer = document.querySelector('.modal__grid'),
        images = document.querySelectorAll('.image-grid');

        imageContainer.addEventListener('click', function(e){
            for(let i = 0; i < images.length; i++){
                images[i].classList.remove('img-active');
                if(e.target == images[i]){
                    document.body.style.backgroundImage = "url('"+ images[i].src+ "')";
                }
            }
            if (e.target.classList.contains('image-grid')){
                e.target.classList.add('img-active');
            }
        });



    //Завдання 3. Кнопка налаштування
    let settings = document.getElementById('settings-icon'),
        modal = document.querySelector('.modal');

        settings.addEventListener('click', function() {
            if (modal.classList.contains('no-active') == true) {
                modal.classList.remove('no-active');
            } else {
                modal.classList.add('no-active');
            }
        });
    
});