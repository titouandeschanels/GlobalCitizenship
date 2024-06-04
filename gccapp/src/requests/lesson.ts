export const getLesson = async () => {
    const username = process.env.REACT_APP_REQUEST_USER;
    const password = process.env.REACT_APP_REQUEST_PASSWORD;

    try {
        const urlRequest =
            process.env.REACT_APP_BACKEND_URL + `lesson`;
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
        console.error('ERROR GET Lesson = ' + error);
    }
};

export const postLesson = async (lesson: any) => {
    const username = process.env.REACT_APP_REQUEST_USER;
    const password = process.env.REACT_APP_REQUEST_PASSWORD;
    console.log("DATA in post")
    console.log(lesson);

    try {
        const urlRequest =
            process.env.REACT_APP_BACKEND_URL + `lesson/`;
        const response = await fetch(urlRequest, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
            body: JSON.stringify(lesson)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ERROR SET Lesson = ' + error);
    }
}