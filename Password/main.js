"use strict";
{
    function generatePassword() {
        const checkBoxNumber = document.querySelector('#number');
        const checkBoxSymbol = document.querySelector('#symbol');
        const letters = 'qwertyuiopasdfghjlzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        const symbols = '@*:;+,<>.?/_\]}[{|^~-=&%$!';
        const numbers = '0123456789';
        let candidateChars = '' + letters;
        if (checkBoxNumber.checked) {
            candidateChars += numbers;
        }
        if (checkBoxSymbol.checked) {
            candidateChars += symbols;
        }
        let result = '';
        for (let i = 0; i < Number(slider.value); i++) {
            result += candidateChars[Math.floor(Math.random() * candidateChars.length)];
        }
        return result;
    }
    const generateButton = document.querySelector('#generate-button');
    const slider = document.querySelector('#slider');
    const pElement = document.querySelector('#result-text');
    pElement.textContent = generatePassword();
    slider.addEventListener('input', () => {
        const passwordLength = document.querySelector('#password-length');
        passwordLength.textContent = slider.value;
    });
    generateButton.addEventListener(`click`, () => {
        pElement.textContent = generatePassword();
    });
}
