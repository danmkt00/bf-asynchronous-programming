const renderArticle = (article = {}) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'row';

    //title
    const h3El = document.createElement('h3');
    const aTitleEl = document.createElement('a');
    aTitleEl.href = `https://en.wikipedia.org/wiki/${article.title}`;
    aTitleEl.target = '_blank';

    aTitleEl.innerText = article.title;

    h3El.append(aTitleEl);

    //snippet
    const pEl = document.createElement('p');
    pEl.innerHTML = article.snippet;

    //view full
    const aViewEl = document.createElement('a');
    aViewEl.href = `https://en.wikipedia.org/wiki/${article.title}`;
    aViewEl.target = '_blank';

    const buttonViewEl = document.createElement('button');
    buttonViewEl.innerText = 'View Full Article';

    aViewEl.append(buttonViewEl);

    //append to row container
    rowEl.append(h3El, pEl, aViewEl);

    return rowEl;
};

export default renderArticle;
