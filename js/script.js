window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let deadline = `2019-10-11`;

    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor(time / (1000 * 60 * 60));

        return {
            'total'   : time,
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById('timer');
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');

        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endtime);
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
});