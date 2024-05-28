{
    class Panel {
        img: HTMLImageElement;
        stop: HTMLButtonElement;
        timeoutId: NodeJS.Timeout | undefined = undefined;

        constructor() {
            const section = document.createElement('section');
            section.classList.add('panel');

            this.img = document.createElement('img');
            this.img.src = this.getRandomImage();

            this.stop = document.createElement('button');
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop-btn', 'inactive');

            this.stop.addEventListener('click', () => {
                if (this.stop.classList.contains('inactive')) return;
                this.stop.classList.add('inactive');
                clearTimeout(this.timeoutId);

                panelsLeft--;

                if (panelsLeft === 0) {
                    spin?.classList.remove('inactive');
                    panelsLeft = panels.length;
                    checkResult();
                };
            });

            section.appendChild(this.img);
            section.appendChild(this.stop);

            const main = document.querySelector('main');
            main?.appendChild(section);
        };

        getRandomImage = () => {
            const images = ['img/seven.png', 'img/bell.png', 'img/cherry.png'];
            return images[Math.floor(Math.random() * images.length)]
        };

        spin = () => {
            this.img.src = this.getRandomImage();
            this.timeoutId = setTimeout(() => {
                this.spin();
            }, 50);
        };

        isUnmatched = (p1: Panel, p2: Panel): boolean => this.img.src !== p1.img.src && this.img.src !== p2.img.src
        unmatch = (): void => this.img.classList.add('unmatched');

        activate = () => {
            this.img.classList.remove('unmatched');
            this.stop.classList.remove('inactive');
        };
    };

    const spin: HTMLButtonElement | null = document.querySelector('#spin-btn');
    const panels: Panel[] = [...Array(3)].map(() => new Panel());
    let panelsLeft = panels.length;

    spin?.addEventListener('click', () => {
        if (spin.classList.contains('inactive')) return;

        spin.classList.add('inactive');
        panels.forEach(panel => {
            panel.activate();
            panel.spin();
        });
    });

    const checkResult = () => {
        for (let i = 0; i < panels.length; i++) {
            if (panels[i].isUnmatched(panels[(i + 1) % panels.length], panels[(i + 2) % panels.length])) {
                panels[i].unmatch();
            };
        };
    };
};
