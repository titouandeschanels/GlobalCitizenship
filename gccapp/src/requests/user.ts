export const getUser = async () => {
    const username = process.env.REACT_APP_REQUEST_USER;
    const password = process.env.REACT_APP_REQUEST_PASSWORD;

    try {
        const urlRequest =
            process.env.REACT_APP_BACKEND_URL + `users/1`;
        const responseUser = await fetch(urlRequest, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });

        const user = await responseUser.json();
        console.log('USER = ' + JSON.stringify(user));
        return user;
    } catch (error) {
        console.log('ERROR GET USER = ' + error);
    }
};
