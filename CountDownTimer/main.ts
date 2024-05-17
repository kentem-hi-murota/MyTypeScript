{
    function getRestTime(endTime: number): number {
        return endTime - Date.now();
    }

    function showTime(timeSeconds: number): void {
        const stringFormattedMinitues: string = (Math.floor(timeSeconds / 60)).toString().padStart(2, '0');
        const stringFormattedSeconds: string = (timeSeconds % 60).toString().padStart(2, '0');
        if (timer)timer.textContent = `${stringFormattedMinitues}:${stringFormattedSeconds}`;
    }

    const timer: HTMLElement | null = document.querySelector('#timer');
    const startButton: HTMLButtonElement | null = document.querySelector('#btn');

    if(startButton)startButton.addEventListener('click', () => {
        const endTimer: number = new Date().getTime() + 3 * 1000;
        const intervalId: NodeJS.Timeout = setInterval(() => {
            startButton.disabled = true;
            startButton.classList.add('inactive');
            const restTime: number = getRestTime(endTimer);
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