{
    const btn: HTMLButtonElement = document.querySelector('#btn')!;
    const result: HTMLElement = document.querySelector('#result')!;
    const results:string[] = ['大吉', '中吉', '小吉', '凶'];

    btn.addEventListener('click', () => {
        const n: number = Math.floor(Math.random() * results.length);
        result.textContent = results[n];
    });
}