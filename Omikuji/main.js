"use strict";
{
    const btn = document.querySelector('#btn');
    const result = document.querySelector('#result');
    const results = ['大吉', '中吉', '小吉', '凶'];
    btn.addEventListener('click', () => {
        const n = Math.floor(Math.random() * results.length);
        result.textContent = results[n];
    });
}
