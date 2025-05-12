import { renderComment } from './render-comment.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderPost = (post, comment) => {
    //container
    const containerEl = document.createElement('div');
    containerEl.id = `post-${post.id}`;

    //title
    const h1El = document.createElement('h1');
    h1El.innerText = post.title;

    //posted by
    const codeEl = document.createElement('code');
    codeEl.innerText = `posted by user: ${post.userId}`;

    //body
    const pEl = document.createElement('p');
    pEl.innerHTML = post.body;

    //comments
    const commentsEl = document.createElement('div');
    commentsEl.id = 'comments';

    comment.forEach((comment) => {
        commentsEl.append(renderComment(comment));
    });

    //append to main container
    containerEl.append(h1El, codeEl, pEl, commentsEl);

    return containerEl;
};
