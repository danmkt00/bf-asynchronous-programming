import dom from '../dom.js';
import searchUser from '../handlers/search-user.js';

const fetchAndRenderUser = () => {
    dom.searchBtn.addEventListener('click', searchUser);
};

export default fetchAndRenderUser;
