"use strict";
{
    const text = document.querySelector('#text');
    const deleteButton = document.querySelector('#delete');
    const saveButton = document.querySelector('#save');
    const saveMessage = document.querySelector('#message');
    saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener('click', () => {
        if (text)
            localStorage.setItem('memo', text.value);
        if (saveMessage)
            saveMessage.classList.add('appear');
        setTimeout(() => {
            if (saveMessage)
                saveMessage.classList.remove('appear');
        }, 1000);
        if (deleteButton)
            deleteButton.disabled = false;
    });
    deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => {
        if (confirm('本当に削除しますか?')) {
            if (text)
                text.value = '';
            localStorage.removeItem('memo');
            if (deleteButton)
                deleteButton.disabled = true;
            if (saveButton)
                saveButton.disabled = true;
        }
    });
    text === null || text === void 0 ? void 0 : text.addEventListener('input', () => {
        if (saveButton)
            saveButton.disabled = text.value === '';
    });
    let savedText = localStorage.getItem('memo');
    if (text) {
        if (savedText) {
            text.value = savedText;
        }
        else {
            text.value = '';
            if (deleteButton)
                deleteButton.disabled = true;
            if (saveButton)
                saveButton.disabled = true;
        }
    }
}
