const renderUser = (data) => {
    //main card
    const card = document.createElement('card');

    //row
    const row = document.createElement('div');
    row.className = 'row';

    //img
    const imgDiv = document.createElement('div');

    const userAvatar = document.createElement('img');
    userAvatar.className = 'user-profile-img';
    userAvatar.src = data.avatar_url;

    //link to profile
    const link = document.createElement('a');
    link.href = data.html_url;
    link.innerText = 'View profile';
    link.target = '_blank';

    imgDiv.append(userAvatar, link);

    //info div

    const infoDiv = document.createElement('div');

    //name
    const name = document.createElement('h3');
    name.innerText = data.name;

    //acc creation
    const dateCreated = document.createElement('p');
    dateCreated.innerText = `Account Created: ${data.created_at}`;

    //public repos
    const publicRepos = document.createElement('p');
    publicRepos.innerText = `Public repos: ${data.public_repos}`;

    infoDiv.append(name, dateCreated, publicRepos);

    card.append(row, imgDiv, infoDiv);
    return card;
};

export default renderUser;
