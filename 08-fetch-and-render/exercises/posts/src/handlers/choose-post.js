import { typicodeResource } from '../api-calls/typicode-resource.js';

import { renderPost } from '../components/render-post.js';
import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

export const choosePost = async (event) => {
    const postId = event.target.form.postId.value;

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const postPromise = typicodeResource('posts', postId);
        const commentPromise = typicodeResource('posts', postId, 'comments');

        const [post, comment] = await Promise.all([
            postPromise,
            commentPromise,
        ]);

        const postElement = renderPost(post, comment);

        root.appendChild(postElement);

        console.log(post, comment);
    } catch (err) {
        console.error(err);

        const errorElement = err.message.includes('HTTP error! status: 404')
            ? fourOhFour(postId)
            : otherError(postId);

        root.appendChild(errorElement);
    }
};
