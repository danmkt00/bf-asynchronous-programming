import chooseArticle from '../handlers/choose-article.js';
import dom from '../dom.js';

const fetchAndRenderArticle = () => {
    dom.submitBtn.addEventListener('click', chooseArticle);
};

export default fetchAndRenderArticle;
