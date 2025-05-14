/**
 * Shows git hub user by username.
 *
 * @async
 * @param {string} userName - The user that we are looking for
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error!
 */

const gitHubData = async (userName) => {
    const URL = `https://api.github.com/users/${userName}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};

export default gitHubData;
