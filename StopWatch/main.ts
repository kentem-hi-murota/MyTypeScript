{
    const timerText: HTMLParagraphElement | null = document.querySelector('#time-text');
    const startButton: HTMLButtonElement | null = document.querySelector('#start-button');
    const stopButton: HTMLButtonElement | null = document.querySelector('#stop-button');
    const resetButton: HTMLButtonElement | null = document.querySelector('#reset-button');

    startButton?.addEventListener('click', () => {
        const startTime = Date.now();
        setInterval(() => {
            if (startButton) startButton.disabled = true;
            const elapsedMiliSeconds = Date.now() - startTime;

            const elapsedMiliSecondsText = (elapsedMiliSeconds%1000).toString().padStart(3, '0');
            const elapsedSecondsText = Math.floor((elapsedMiliSeconds / 1000) % 60).toString().padStart(2, '0');
            const elapsedMinituesText = Math.floor(elapsedMiliSeconds / 1000 / 60).toString().padStart(2, '0');

            if (timerText) timerText.textContent = `${elapsedMinituesText}:${elapsedSecondsText}.${elapsedMiliSecondsText}`;

        }, 1);
    });
}