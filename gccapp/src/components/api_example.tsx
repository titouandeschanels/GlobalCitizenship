
import axios from "axios";

function Example() {
    
    let apiPath:string = "127.0.0.1:8000/" //make this global so you can use it everywhere
    let studentId: number = 1 //For prototype 1 is always fine
    
    /*
    API paths:
        submission:
            get all: apiPath/submission/ 
            get single: apiPath/submission/{submission_id}/
            get single: apiPath/submission/{student_id}/{lesson_id}/
            create/update: apiPath/submission/ post(content (string), set_student (int id), set_chapter (int chapter_number), set_lesson (int lesson_number))
        position:
            get single: apiPath/position/{student_id}/
            update: apiPath/position/{student_id}/ post(set_lesson (int lesson_number), set_chapter (int chapter_number))
    */
    
    // Call this on button click or load page or something
    const updatePosition = () => {
        const info = {
            set_lesson: 1, //Whatever lesson number the user is at
            set_chapter: 2 //Same
        };
        axios
            .put(apiPath + "position/" + studentId, info)
            .then(response => {
                console.log(response.data) //The data that is returned, do something usefull with it
            })
            .catch((err) => console.log(err));
    }
    
    const getPosition = () => {
        axios.get(apiPath + "position/" + studentId).then(response => {
            console.log(response.data)
        })
        .catch((err) => console.log(err));
    }
} 