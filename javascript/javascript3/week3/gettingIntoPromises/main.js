async function fetchJson(user) {
    const apiURL = "https://api.github.com/search/repositories?q=user:" + `${user}`;
    const response = await fetch(apiURL);
    return await response.json();
}
Promise.all([
    fetchJson('ajgcph2019'),
    fetchJson('deepthidukka'),
    fetchJson('aswini-d3'),
    fetchJson('benna100')
]).then(list => {
    console.log(renderRepositories(list))
}).catch(error => console.log(error));

function renderRepositories(users) {
    users.forEach(user => {
        const userUl = document.createElement("ul");
        document.body.appendChild(userUl);
        userUl.innerHTML = `<h1>${user.items[0].owner.login}</h1>`;
        user.items.forEach(item => {
            const itemLi = document.createElement('li')
            userUl.appendChild(itemLi).innerHTML =
                `<h3>${item.name}: ${item.html_url}</h3>`;
        })
    });
}