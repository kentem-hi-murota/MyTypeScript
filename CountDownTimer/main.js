"use strict";
{
    function getRestTime(endTime) {
        return endTime - Date.now();
    }
    function showTime(timeSeconds) {
        const stringFormattedMinitues = (Math.floor(timeSeconds / 60)).toString().padStart(2, '0');
        const stringFormattedSeconds = (timeSeconds % 60).toString().padStart(2, '0');
        if (timer)
            timer.textContent = `${stringFormattedMinitues}:${stringFormattedSeconds}`;
    }
    const timer = document.querySelector('#timer');
    const startButton = document.querySelector('#btn');
    if (startButton)
        startButton.addEventListener('click', () => {
            const endTimer = new Date().getTime() + 3 * 1000;
            const intervalId = setInterval(() => {
                startButton.disabled = true;
                startButton.classList.add('inactive');
                const restTime = getRestTime(endTimer);
                showTime(Math.floor(restTime / 1000));
                if (restTime < 0) {
                    clearInterval(intervalId);
                    showTime(3);
                    startButton.disabled = false;
                    startButton.classList.remove('inactive');
                }
            }, 100);
        });
}
