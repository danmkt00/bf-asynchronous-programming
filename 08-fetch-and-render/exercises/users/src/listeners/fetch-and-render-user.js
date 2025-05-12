import chooseUser from '../handlers/choose-user.js';

const fetchAndRenderUser = (id = '') => {
    document.getElementById(id).addEventListener('click', chooseUser);
};

export default fetchAndRenderUser;
