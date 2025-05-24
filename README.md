# Simple Todo Application (React + Django)

This is a simple Todo application built with React for the frontend and Django (with Django REST Framework) for the backend. Data is stored in-memory on the backend and will reset when the backend server restarts.

## Features

- List all todos.
- Add a new todo.
- Mark a todo as complete or incomplete.
- Delete a todo.

## Project Structure

```
.
├── todo_project/        # Django project
│   ├── todo_project/    # Django project configuration
│   ├── todo_app/        # Django app for todo functionality
│   └── manage.py
├── frontend/            # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodoForm.js
│   │   │   ├── TodoItem.js
│   │   │   └── TodoList.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── ...
└── README.md
```

## Prerequisites

- Python 3.8+ and pip
- Node.js and npm (or yarn)

## Setup and Running

### Backend (Django)

1.  **Navigate to the backend directory:**
    ```bash
    cd todo_project 
    ```

2.  **Create a virtual environment and activate it (recommended):**
    ```bash
    python -m venv venv
    # On Windows
    # venv\Scripts\activate
    # On macOS/Linux
    # source venv/bin/activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install django djangorestframework django-cors-headers
    ```

4.  **Configure CORS (Cross-Origin Resource Sharing):**
    Open `todo_project/todo_project/settings.py`:
    *   Add `'corsheaders'` to `INSTALLED_APPS`.
    *   Add `'corsheaders.middleware.CorsMiddleware'` to the beginning of the `MIDDLEWARE` list.
    *   Add the following at the end of the file:
        ```python
        CORS_ALLOWED_ORIGINS = [
            "http://localhost:3000", # React development server
        ]
        # Or, for more permissive settings during development (less secure):
        # CORS_ALLOW_ALL_ORIGINS = True
        ```

5.  **Run the Django development server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://localhost:8000/api/todos/`. No database migrations are needed as data is stored in memory.

### Frontend (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    # or if you use yarn:
    # yarn install
    ```

3.  **Start the React development server:**
    ```bash
    npm start
    # or if you use yarn:
    # yarn start
    ```
    The frontend application will open automatically in your browser at `http://localhost:3000`.

## API Endpoints

The backend provides the following RESTful API endpoints:

-   `GET /api/todos/`: List all todos.
-   `POST /api/todos/`: Create a new todo.
    -   Request body: `{ "title": "string", "description": "string (optional)" }`
-   `GET /api/todos/<id>/`: Retrieve a specific todo.
-   `PUT /api/todos/<id>/`: Update a specific todo.
    -   Request body: `{ "title": "string (optional)", "description": "string (optional)", "completed": "boolean (optional)" }`
-   `PATCH /api/todos/<id>/`: Partially update a specific todo. (Same body as PUT)
-   `DELETE /api/todos/<id>/`: Delete a specific todo.
