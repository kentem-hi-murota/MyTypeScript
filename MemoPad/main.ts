{
    const text: HTMLTextAreaElement | null = document.querySelector('#text');
    const deleteButton: HTMLButtonElement | null = document.querySelector('#delete');
    const saveButton: HTMLButtonElement | null = document.querySelector('#save');
    const saveMessage: HTMLParagraphElement | null = document.querySelector('#message');

    saveButton?.addEventListener('click', () => {
        if (text) localStorage.setItem('memo', text.value);
        if (saveMessage) saveMessage.classList.add('appear');
        setTimeout(() => {
            if (saveMessage) saveMessage.classList.remove('appear');
        }, 1000);
        if (deleteButton) deleteButton.disabled = false;
    });

    deleteButton?.addEventListener('click', () => {
        if (confirm('本当に削除しますか?')) {
            if (text) text.value = '';
            localStorage.removeItem('memo');
            if (deleteButton) deleteButton.disabled = true;
            if(saveButton) saveButton.disabled = true;
        }
    });

    text?.addEventListener('input', () => {
        if (saveButton) saveButton.disabled = text.value === '';
    });

    let savedText: string | null = localStorage.getItem('memo');
    if (text) {
        if (savedText) {
            text.value = savedText;
        } else {
            text.value = '';
            if (deleteButton) deleteButton.disabled = true;
            if(saveButton) saveButton.disabled = true;
        }
    }

}