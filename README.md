# GlobalCitizenship

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory (gccapp), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Setup Backend

Prerequisite: Have Python 3.12.3+ installed

1. Go into the backend directory
    - `cd backend`
2. Create a virtual environment
    - `py -m venv env`
3. Activate the venv
    - For Windows: `env\Scripts\activate`
    - For Mac/Linux: `source env/bin/activate`
4. Install dependencies
    - `pip install -r requirements.txt`
5. Create your database
    - `py manage.py migrate`
6. Create Django superuser
    - `py manage.py createsuperuser --username admin --email admin@example.com`
7. Seed the database with default data
    - Optional: flush the database `py manage.py flush`
    - `py manage.py seed` (Repeat this 3 times until it returns `Seeding SeederStudent...Successfully ^_^` (the first two times will give an error, priority should do them in order, but that doesn't work...))
8. Check if everything is set up correctly
    - `py manage.py runserver`

You should be all set up for now :)

note: if you install new pip packages, make sure to update the requirements.txt
`pip freeze -r requirements.txt`
