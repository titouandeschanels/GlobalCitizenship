import { getChapter, postChapter } from "./requests/chapter";
import newChapters from './data/chapters.json';

export const setupDb = async () => {
    console.log('SETUP DB');

    const chapterData = await getChapter();
    if (chapterData === null) {
        console.log('ERROR GET CHAPTER');
        return;
    };
    console.log('CHAPTER DATA = ' + JSON.stringify(chapterData));

    if (chapterData.count === 0) {
        for (let i = 0; i < newChapters.length; i++) {
            const chapter = newChapters[i];
            const data = await postChapter(chapter);
            if (data === null) {
                console.log('ERROR POST CHAPTER');
                return;
            }
            console.log('CHAPTER DATA = ' + JSON.stringify(data));
        }
    }
    console.log('SETUP DB DONE');
};