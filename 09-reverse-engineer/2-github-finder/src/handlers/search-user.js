import gitHubData from '../api-calls/git-hub-data.js';
import dom from '../dom.js';
import renderUser from '../components/render-user.js';

const searchUser = async () => {
    try {
        const userInput = dom.input.value.trim();
        const data = await gitHubData(userInput);

        const userCard = renderUser(data);

        dom.profileContainer.innerHTML = '';
        dom.profileContainer.append(userCard);
    } catch (err) {
        console.error(err);
    }
};

export default searchUser;
