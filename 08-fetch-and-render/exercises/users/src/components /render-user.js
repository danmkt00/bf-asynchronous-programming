import renderTodo from './render-todo.js';

const renderUser = (user, todos) => {
    const containerEl = document.createElement('div');
    containerEl.id = `user-${user.id}`;

    //username
    const h1El = document.createElement('h1');
    h1El.innerText = user.username;

    //name
    const pNameEl = document.createElement('p');
    pNameEl.innerText = `name: ${user.name}`;

    //email
    const pEmailEl = document.createElement('p');
    pEmailEl.innerText = `email: ${user.email}`;

    //website
    const pWebSiteEl = document.createElement('p');
    pWebSiteEl.innerText = 'website: ';

    const aWebSiteEl = document.createElement('a');
    aWebSiteEl.target = '_blank';
    aWebSiteEl.href = `http://${user.website}`;
    aWebSiteEl.innerHTML = user.website;

    pWebSiteEl.append(aWebSiteEl);

    //todos
    const todosContainer = document.createElement('div');
    todosContainer.id = 'comments';

    todos.forEach((todo) => {
        todosContainer.append(renderTodo(todo));
    });

    //append to container
    containerEl.append(h1El, pNameEl, pEmailEl, pWebSiteEl, todosContainer);

    return containerEl;
};

export default renderUser;
