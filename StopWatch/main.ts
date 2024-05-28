{
    const timerText: HTMLParagraphElement | null = document.querySelector('#time-text');
    const startButton: HTMLButtonElement | null = document.querySelector('#start-button');
    const stopButton: HTMLButtonElement | null = document.querySelector('#stop-button');
    const resetButton: HTMLButtonElement | null = document.querySelector('#reset-button');

    let timerId: NodeJS.Timeout;
    let elapsedTime: number = 0;

    startButton?.addEventListener('click', () => {
        const startTime = Date.now() - elapsedTime;
        if (startButton) startButton.disabled = true;
        if (stopButton) stopButton.disabled = false;
        
        timerId = setInterval(() => {
            const elapsedMiliSeconds = Date.now() - startTime;
            const elapsedMiliSecondsText = (elapsedMiliSeconds % 1000).toString().padStart(3, '0');
            const elapsedSecondsText = Math.floor((elapsedMiliSeconds / 1000) % 60).toString().padStart(2, '0');
            const elapsedMinituesText = Math.floor(elapsedMiliSeconds / 1000 / 60).toString().padStart(2, '0');

            if (timerText) timerText.textContent = `${elapsedMinituesText}:${elapsedSecondsText}.${elapsedMiliSecondsText}`;
            
            elapsedTime = elapsedMiliSeconds;
        }, 1);
    });

    stopButton?.addEventListener('click', () => {
        clearInterval(timerId);
        if (startButton) startButton.disabled = false;
        if (stopButton) stopButton.disabled = true;
        if (resetButton) resetButton.disabled = false;
    });
}