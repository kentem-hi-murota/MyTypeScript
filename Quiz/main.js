"use strict";
{
    function render(quiz) {
        const main = document.querySelector('main');
        if (main) {
            const section = document.createElement('section');
            const h2 = document.createElement('h2');
            h2.textContent = quiz[0];
            section.appendChild(h2);
            const ul = document.createElement('ul');
            for (let index = 1; index < quiz.length - 1; index++) {
                const li = document.createElement('li');
                li.textContent = quiz[index].toString();
                li.addEventListener('click', () => {
                    TFJudgement(li, Number(quiz[quiz.length - 1]), index);
                });
                ul.appendChild(li);
            }
            section.appendChild(ul);
            main.appendChild(section);
        }
    }
    function TFJudgement(li, correctindex, liIndex) {
        if (correctindex === liIndex) {
            li.classList.add('correct');
        }
        else {
            li.classList.add('wrong');
        }
    }
    const quizzes = [
        ['問題1', '選択肢A', '選択肢B', '選択肢C', 1],
        ['問題2', '選択肢A', '選択肢B', '選択肢C', 2],
        ['問題3', '選択肢A', '選択肢B', '選択肢C', 3],
    ];
    quizzes.forEach((quiz) => {
        render(quiz);
    });
}
