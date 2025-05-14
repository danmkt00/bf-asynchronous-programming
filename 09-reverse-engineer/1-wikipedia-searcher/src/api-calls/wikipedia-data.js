/**
 * Fetches a specific resource from the wikipedia API.
 *
 * @async
 * @param {string} searchTerm - The parameter to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error!
 */

const wikipediaData = async (searchTerm) => {
    const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=${searchTerm}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};

export default wikipediaData;
