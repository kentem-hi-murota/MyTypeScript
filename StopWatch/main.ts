{
    const timerText: HTMLParagraphElement | null = document.querySelector('#time-text');
    const startButton: HTMLButtonElement | null = document.querySelector('#start-button');
    const stopButton: HTMLButtonElement | null = document.querySelector('#stop-button');
    const resetButton: HTMLButtonElement | null = document.querySelector('#reset-button');

    let timerId: NodeJS.Timeout;
    let elapsedTime = 0;

    startButton?.addEventListener('click', () => {
        const startTime = Date.now() - elapsedTime;
        setButtonState(true, false, true);
        
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
        setButtonState(false, true, false)
    });

    resetButton?.addEventListener('click' , () => {
        clearInterval(timerId);
        setButtonState(false, true, true);
        elapsedTime = 0;
        if (timerText) timerText.textContent = '00:00.000';
    });

    const setButtonState = (isDisableStartBtn:boolean, isDisableStopBtn:boolean, isDisableResetBtn:boolean):void => {
        if (startButton) startButton.disabled = isDisableStartBtn;
        if (stopButton) stopButton.disabled = isDisableStopBtn;
        if (resetButton) resetButton.disabled = isDisableResetBtn;
    };
}