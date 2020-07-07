const fetch = require('node-fetch');

const BASE_URL_API = 'https://fakedata.dev/users/v1';
const RANDOM_USERS_ENDPOINT = '/get_random_users';

const getRandomUsers = () => {
    return fetch(`${BASE_URL_API}${RANDOM_USERS_ENDPOINT}`)
        .then(response => response.json())
        .then(json => json);
}

const getUsers = async () => {
    try {
        const usersData = await getRandomUsers();
        console.table(usersData);
    } catch (error) {
        console.error(error);
    }
}

getUsers();

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch