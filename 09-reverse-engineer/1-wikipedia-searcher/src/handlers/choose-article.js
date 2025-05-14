import wikipediaData from '../api-calls/wikipedia-data.js';
import renderArticle from '../components/render-article.js';
import dom from '../dom.js';

const chooseArticle = async (event) => {
    dom.output.innerHTML = '';

    try {
        const articles = await wikipediaData(dom.input.value);

        console.log(articles);

        console.log(articles.query.search);

        articles.query.search.forEach((article) => {
            dom.output.append(renderArticle(article));
        });
    } catch (err) {
        console.error(err);
    }
};

export default chooseArticle;
