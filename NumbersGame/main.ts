{
    class Board {
        constructor(game: Game) {
            this.game = game;

            this.panels = [...Array(this.game.getPanelCount()**2)].map((_, i) => new Panel(this.game));

            this.setup();
        };

        setup = () => {
            const board: HTMLUListElement | null = document.querySelector('#board');
            this.panels.forEach(panel => {
                board?.appendChild(panel.getLi());
            });
        };

        activate = () => {
            this.shuffleArray(this.game.getNumbers());
            this.panels.forEach((panel, i) => {
                panel.activate(this.game.getNumbers()[i]);
            });
        }

        shuffleArray = (array: number[]): number[] => array.sort(() => 0.5 - Math.random());

        game: Game;
        panels: Panel[];
    }

    class Panel {
        constructor(game: Game) {
            this.game = game;
            this.li = document.createElement('li');
            this.li.classList.add('pressed');

            this.li.addEventListener('click', () => {
                this.check();
            });
        }

        getLi = () => this.li;

        activate = (num: number) => {
            this.li.classList.remove('pressed');
            this.li.textContent = num.toString();
        }

        check = () => {
            if (this.game.getCurrentNum() === Number(this.li.textContent)) {
                this.li.classList.add('pressed');
                this.game.addCurrentNum();
                if (this.game.getCurrentNum() === this.game.getPanelCount() ** 2) {
                    clearInterval(this.game.getTimerId());
                }
            }
        }

        game: Game;
        li: HTMLLIElement;
    }

    class Game {
        constructor(level: number) {
            this.panelCount = level;
            this.numbers = [...Array(this.panelCount**2)].map((_, i) => i);
            this.board = new Board(this);
            this.timerId = undefined;
            this.currentNum = undefined;

            const startBtn = document.querySelector('#start-btn');
            startBtn?.addEventListener('click', () => {
                this.start();
            });
            this.setup();
        }

        getCurrentNum = () => this.currentNum;
        addCurrentNum = () => { this.currentNum !== undefined ? this.currentNum++ : undefined; }
        getTimerId = () => this.timerId;
        getNumbers = () => this.numbers;
        getPanelCount = () => this.panelCount;

        setup = () => {
            const container: HTMLSelectElement | null = document.querySelector('#container');
            const PANEL_WIDTH = 50;
            const BOARD_PADDING = 10;
            if (container) container.style.width = `${PANEL_WIDTH * this.getPanelCount() + BOARD_PADDING * 2}px`;
        }

        start = () => {
            this.currentNum = 0;
            this.board.activate();
            this.runTimer();
        }

        runTimer = () => {
            const timerText = document.querySelector('#timer');
            const startTime = Date.now();
            if (this.timerId !== undefined) clearInterval(this.timerId);
            this.timerId = setInterval(() => {
                const elapsedtime = ((Date.now() - startTime) / 1000).toFixed(2);
                if (timerText) timerText.textContent = elapsedtime.toString();
            }, 10);
        }

        panelCount: number;
        numbers: number[];
        board: Board;
        currentNum: number | undefined;
        timerId: NodeJS.Timeout | undefined;
    }

    new Game(10);

}