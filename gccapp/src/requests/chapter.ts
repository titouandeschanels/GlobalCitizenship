export const getChapter = async () => {
    const username = process.env.REACT_APP_REQUEST_USER;
    const password = process.env.REACT_APP_REQUEST_PASSWORD;

    try {
        const urlRequest =
            process.env.REACT_APP_BACKEND_URL + `chapter`;
        const response = await fetch(urlRequest, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('ERROR GET Chapter = ' + error);
    }
};

export const postChapter = async (chapter: any) => {
    const username = process.env.REACT_APP_REQUEST_USER;
    const password = process.env.REACT_APP_REQUEST_PASSWORD;
    console.log("DATA in post")
    console.log(chapter);

    try {
        const urlRequest =
            process.env.REACT_APP_BACKEND_URL + `chapter/`;
        const response = await fetch(urlRequest, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
            body: JSON.stringify(chapter)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('ERROR SET Chapter = ' + error);
    }
}