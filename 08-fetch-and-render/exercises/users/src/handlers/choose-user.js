import typicodeResource from '../api-calls/typicode-resource.js';
import renderUser from '../components /render-user.js';

const chooseUser = async (event) => {
    const userId = event.target.form.userId.value;
    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const userPromise = typicodeResource('users', userId);
        const todoPromise = typicodeResource('users', userId, 'todos');

        const [user, todo] = await Promise.all([userPromise, todoPromise]);

        const postElement = renderUser(user, todo);

        root.appendChild(postElement);

        console.log(user, todo);
    } catch (err) {
        console.error(err);

        const errorElement = err.message.includes('HTTP error! status: 404');
    }
};

export default chooseUser;
