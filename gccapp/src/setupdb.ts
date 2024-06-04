import { getChapter, postChapter } from "./requests/chapter";
import { getLesson, postLesson } from "./requests/lesson";
import newChapters from './data/chapters.json';

export const setupDb = async () => {
    console.log('SETUP DB');


    /* SETUP CHAPTERS */
    const chapterData = await getChapter();
    if (chapterData === null) {
        console.error('ERROR GET CHAPTER');
        return;
    };

    if (chapterData.count === 0) {
        for (let i = 0; i < newChapters.length; i++) {
            const chapter = newChapters[i];
            const data = await postChapter(chapter);
            if (data === null) {
                console.error('ERROR POST CHAPTER');
                return;
            }
        }
    }


    /* SETUP LESSON */
    const lessonData = await getLesson();
    if (lessonData === null) {
        console.error('ERROR GET LESSON');
        return;
    };
    console.log('LESSON DATA');
    console.log(lessonData);

    if (lessonData.count === 0) {
        console.log('SETUP LESSON');
    }



    console.log('SETUP DB DONE');
};