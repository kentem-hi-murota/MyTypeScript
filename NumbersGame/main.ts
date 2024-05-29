{
    class Board {
        constructor() {
            this.panels = [...Array(panelCount)].map((_, i) => new Panel());

            this.setup();
        };

        setup = () => {
            const board: HTMLUListElement | null = document.querySelector('#board');
            this.panels.forEach(panel => {
                board?.appendChild(panel.getLi());
            });
        };

        activate = () => {
            this.shuffleArray(numbers);
            this.panels.forEach((panel, i) => {
                panel.activate(numbers[i]);
            });
        }

        shuffleArray = (array: number[]): number[] => array.sort(() => 0.5 - Math.random());

        panels: Panel[];
    }

    class Panel {
        constructor() {
            this.li = document.createElement('li');
            this.li.classList.add('pressed');

            this.li.addEventListener('click', () => {
                this.check();
            });
        }

        getLi = () => this.li;

        activate = (num: number) => {
            currentNum = 0;
            this.li.classList.remove('pressed');
            this.li.textContent = num.toString();
        }

        check = () => {
            if (currentNum === Number(this.li.textContent)) {
                this.li.classList.add('pressed');
                currentNum++;
            }
        }

        li: HTMLLIElement;
    }


    const panelCount = 4;
    const numbers = [...Array(panelCount)].map((_, i) => i);
    const startBtn: HTMLButtonElement | null = document.querySelector('#start-btn');
    const timerText: HTMLParagraphElement | null = document.querySelector('#timer');
    const board = new Board();
    let timerId: NodeJS.Timeout;

    startBtn?.addEventListener('click', () => {
        const startTime = Date.now();
        board.activate();

        timerId = setInterval(() => {
            const elapsedtime = ((Date.now() - startTime) / 1000).toFixed(2);
            if (timerText) timerText.textContent = elapsedtime.toString();
        }, 10);
    });

    let currentNum = 0;
}