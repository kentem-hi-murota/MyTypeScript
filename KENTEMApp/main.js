'use strict';
{
    const chars = ['K', 'E', 'N', 'T', 'E', 'M'];
    const resultMessage = document.querySelector('#resultMessage');
    const charElement = document.querySelector('#chars');
    const startButton = document.querySelector('#startButton');
    function roulette() {
        clearResults();
        let count = 0;
        const timerId = setInterval(() => {
            var _a;
            if (!(charElement && resultMessage && startButton))
                return;
            charElement.textContent += chars[Math.floor(Math.random() * chars.length)];
            count++;
            charElement.scrollIntoView(false);
            if ((_a = charElement.textContent) === null || _a === void 0 ? void 0 : _a.endsWith('KENTEM')) {
                clearInterval(timerId);
                resultMessage.textContent = `got 'KENTEM' in ${count} chars.`;
                startButton.style.display = 'block';
                startButton.scrollIntoView(false);
            }
        }, 0);
    }
    function clearResults() {
        if (charElement)
            charElement.textContent = '';
        if (resultMessage)
            resultMessage.textContent = '';
    }
    if (startButton)
        startButton.addEventListener('click', () => {
            if (startButton)
                startButton.style.display = 'none';
            roulette();
        });
}
