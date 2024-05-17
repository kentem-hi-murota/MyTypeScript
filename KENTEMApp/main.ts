'use strict';

{
    const chars: string[] = ['K', 'E', 'N', 'T', 'E', 'M'];
    const resultMessage: HTMLParagraphElement | null = document.querySelector('#resultMessage');
    const charElement: HTMLParagraphElement | null = document.querySelector('#chars');
    const startButton: HTMLButtonElement | null = document.querySelector('#startButton');

    function roulette(): void {
        clearResults();
        let count: number = 0;

        const timerId: NodeJS.Timeout = setInterval((): void => {
            if (!(charElement && resultMessage && startButton))
                return;

            charElement.textContent += chars[Math.floor(Math.random() * chars.length)];
            count++;
            charElement.scrollIntoView(false);
            if (charElement.textContent?.endsWith('KENTEM')) {
                clearInterval(timerId);
                resultMessage.textContent = `got 'KENTEM' in ${count} chars.`
                startButton.style.display = 'block';
                startButton.scrollIntoView(false);
            }
        }, 0);
    }

    function clearResults(): void {
        if (charElement) charElement.textContent = '';
        if (resultMessage) resultMessage.textContent = '';
    }

    if (startButton) startButton.addEventListener('click', () => {
        if (startButton) startButton.style.display = 'none';
        roulette();
    });

}