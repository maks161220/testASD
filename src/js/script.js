window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Часы
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

    
});