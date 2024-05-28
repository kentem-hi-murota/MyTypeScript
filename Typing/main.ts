{
    const targets: string[] = ['red', 'blue', 'pink', 'grey', 'black', 'green'];
    const targetCount = 3;

    const target: HTMLParagraphElement | null = document.querySelector('#target-text');
    const message: HTMLParagraphElement | null = document.querySelector('#message-text');

    let currentTarget: string;
    let startTime: number;
    let loc = 0;
    let count = 0;
    let isPlaying = false;


    const setWord = (): void => {
        currentTarget = targets[Math.floor(Math.random() * targets.length)];
        if (target) target.textContent = currentTarget;
        loc = 0;
    };

    const startGame = (): void => {
        isPlaying = true;
        if (message) message.style.opacity = '0'
        count = 0;
        startTime = Date.now();
        setWord();
    };

    document.addEventListener('click', () => {
        if (isPlaying) return;
        startGame();
    });

    document.addEventListener('keydown', (e) => {
        if (!isPlaying && e.key !== currentTarget[loc]) return;

        loc++;
        if (target) target.textContent = '_'.repeat(loc) + currentTarget.substring(loc);
        if (loc === currentTarget.length) {
            count++;
            setWord();
            if (count === targetCount) {
                const time = Date.now() - startTime;
                if (message) message.textContent = `Finished! ${(time / 1000).toFixed(2)} seconds.`;
                if (message) message.style.opacity = '1'
                isPlaying = false;
            }
        }
    });
}