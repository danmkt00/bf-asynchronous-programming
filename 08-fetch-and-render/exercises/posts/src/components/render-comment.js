/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderComment = (comment = {}) => {
    const containerEl = document.createElement('div');
    containerEl.id = 'comment-' + comment.id;
    containerEl.className = 'comment';

    //h2 name
    const h2El = document.createElement('h2');
    h2El.innerText = comment.name;

    //email
    const codeEl = document.createElement('code');
    codeEl.innerHTML = `comment by: ${comment.email}`;

    // body
    const pEL = document.createElement('p');
    pEL.innerHTML = comment.body;

    containerEl.append(h2El, codeEl, pEL);

    return containerEl;
};
