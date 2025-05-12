const renderTodo = (todo) => {
    const containerEl = document.createElement('div');
    containerEl.id = `todo-${todo.id}`;
    containerEl.className = 'todo';

    //checkbox
    const inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    inputEl.checked = todo.completed;

    //text
    const codeEl = document.createElement('code');
    codeEl.innerHTML = todo.title;

    containerEl.append(inputEl, codeEl);

    return containerEl;
};

export default renderTodo;
