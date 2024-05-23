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
7. Check if everything is set up correctly 
    - `py manage.py runserver`

You should be all set up for now :)

note: if you install new pip packages, make sure to update the requirements.txt
`pip freeze -r requirements.txt`