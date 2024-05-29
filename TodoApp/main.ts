{
    type TodoObject = { id: number, title: string, isCompleted: boolean };

    const renderTodo = (todo: TodoObject) => {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = todo.isCompleted;
        const span = document.createElement('span');
        span.textContent = todo.title;
        const label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(span);
        const button = document.createElement('button');
        button.textContent = 'x';
        button.addEventListener('click', () => {
            if (!confirm('OK?')) return;
            li.remove();
            todos = todos.filter(item => item.id !== todo.id);
            localStorage.setItem('todos', JSON.stringify(todos));
        });
        const li = document.createElement('li');
        li.appendChild(label);
        li.appendChild(button);

        document.querySelector('#todos')?.appendChild(li);
    };

    const renderTodos = () => { todos.map(todo => renderTodo(todo)) };

    document.querySelector('#add-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoTitle: HTMLInputElement | null = document.querySelector('#add-form input');
        if (todoTitle?.value === undefined) return;

        const todo: TodoObject = {
            id: Date.now(),
            title: todoTitle?.value,
            isCompleted: false
        }
        renderTodo(todo);
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        if (todoTitle) todoTitle.value = '';
        if (todoTitle) todoTitle.focus();
    });

    const localStorageTodos = localStorage.getItem('todos');
    let todos: TodoObject[] = localStorageTodos === null ? [] : JSON.parse(localStorageTodos);

    renderTodos();
}