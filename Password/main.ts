{
    function generatePassword(): string{
        const checkBoxNumber: HTMLInputElement = document.querySelector('#number')!;
        const checkBoxSymbol: HTMLInputElement = document.querySelector('#symbol')!;

        const letters: string = 'qwertyuiopasdfghjlzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        const symbols: string = '@*:;+,<>.?/_\]}[{|^~-=&%$!';
        const numbers: string = '0123456789';

        let candidateChars: string = '' + letters;
        if (checkBoxNumber.checked) {
            candidateChars += numbers;
        }
        if (checkBoxSymbol.checked) {
            candidateChars += symbols;
        }
        let result: string = '';
        for (let i: number = 0; i < Number(slider.value); i++) {
            result += candidateChars[Math.floor(Math.random()*candidateChars.length)];
        }
        return result
    }

    const generateButton: HTMLButtonElement = document.querySelector('#generate-button')!;
    const slider: HTMLInputElement = document.querySelector('#slider')!;
    const pElement: HTMLElement = document.querySelector('#result-text')!;
    pElement.textContent = generatePassword();

    slider.addEventListener('input', () => {
        const passwordLength: HTMLSpanElement = document.querySelector('#password-length')!;
        passwordLength.textContent = slider.value;
    });

    generateButton.addEventListener(`click`, () => {
        pElement.textContent = generatePassword();
    });

}