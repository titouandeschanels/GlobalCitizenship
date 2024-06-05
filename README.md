# GlobalCitizenship

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
