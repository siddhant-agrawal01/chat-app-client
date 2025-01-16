# Django Chat Application

This is a real-time chat application built with Django for the backend and React for the frontend. The application supports user authentication, real-time messaging, and WebSocket connections.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Python 3.8+
- Node.js 14+
- npm 6+
- Django 3.2+
- PostgreSQL (or any other preferred database)

## Installation

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/django-chat.git
    cd django-chat
    ```

2. **Create a virtual environment and activate it:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install backend dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set up the database:**

    Update the `DATABASES` setting in `settings.py` with your database configuration.

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'yourdbname',
            'USER': 'yourdbuser',
            'PASSWORD': 'yourdbpassword',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

5. **Run database migrations:**

    ```bash
    python manage.py migrate
    ```

6. **Create a superuser:**

    ```bash
    python manage.py createsuperuser
    ```

7. **Start the backend server:**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd client
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    npm start










    user - savian , user 2 admin@gmail.com
    pass-y8[FiBao