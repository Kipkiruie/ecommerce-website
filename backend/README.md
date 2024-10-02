# Project Management System

This is a simple **Project Management System** built using **Laravel** for the backend and **React** for the frontend. The application allows users to create, update, delete, and view the status of projects. It provides an intuitive interface for managing various projects and tracking their progress.

## Features

- **Add Project**: Users can create a new project by providing details such as title, description, and status.
- **Update Project**: Users can edit project information, such as updating the project title, description, or status.
- **Delete Project**: Users can remove projects that are no longer relevant.
- **View Project Status**: Users can track the status of all projects and view them in a list format.

## Tech Stack

- **Backend**: Laravel 9.x
- **Frontend**: React 18.x
- **Database**: MySQL (or any database supported by Laravel)
- **API**: RESTful API for communication between Laravel and React
- **Frontend Styling**: Bootstrap or any other CSS framework

## Installation and Setup

Follow the steps below to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed:

- **PHP** (>= 8.0)
- **Composer**
- **Node.js** (>= 16.x)
- **MySQL** (or any other database of choice)
- **NPM** or **Yarn**

### Backend (Laravel)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/project-management-system.git
   cd project-management-system
   ```

2. **Install dependencies:**

   ```bash
   composer install
   ```

3. **Set up the environment:**

   Copy the `.env.example` file to create the `.env` file:

   ```bash
   cp .env.example .env
   ```

   Update your `.env` file with your database credentials and other necessary configurations:

   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=project_management_db
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

4. **Generate the application key:**

   ```bash
   php artisan key:generate
   ```

5. **Run migrations to create the database schema:**

   ```bash
   php artisan migrate
   ```

6. **Run the Laravel development server:**

   ```bash
   php artisan serve
   ```

### Frontend (React)

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   Or, if you're using yarn:

   ```bash
   yarn install
   ```

3. **Run the React development server:**

   ```bash
   npm start
   ```

   The React app will be served at `http://localhost:3000`.

### API Integration

The Laravel backend exposes a set of RESTful APIs that the React frontend consumes for managing projects. Below is a summary of the main API routes:

- `GET /api/projects`: Retrieve a list of all projects.
- `POST /api/projects`: Create a new project.
- `PUT /api/projects/{id}`: Update an existing project.
- `DELETE /api/projects/{id}`: Delete a project.
- `GET /api/projects/{id}`: Retrieve a specific project by ID.

### API Documentation

The API endpoints are documented in the `routes/api.php` file. You can use tools like **Postman** or **cURL** to test the API.

### Running the Full Application

With both the backend and frontend servers running, open your browser and navigate to `http://localhost:3000` to access the React frontend, which interacts with the Laravel backend through the APIs.

## Project Structure

### Backend (Laravel)

```
project-management-system/
├── app/
├── config/
├── database/
├── routes/
│   ├── api.php       # API routes for project management
│   └── web.php       # Web routes (if applicable)
├── public/
├── resources/
├── storage/
├── .env              # Environment configuration
└── ...
```

### Frontend (React)

```
frontend/
├── src/
│   ├── components/   # React components
│   ├── services/     # API services for interacting with Laravel backend
│   ├── App.js        # Main React App component
│   └── index.js      # Main entry point
├── public/
└── ...
```

## Usage

1. **Add a New Project**: Click the "Add Project" button, fill out the project form, and submit.
2. **Update a Project**: Click the "Edit" button next to any project in the project list, modify the details, and save the changes.
3. **Delete a Project**: Click the "Delete" button next to any project you want to remove.
4. **View Project Status**: The project list displays the status of each project, allowing you to easily track progress.

## Contributing

Feel free to fork the repository and submit pull requests. Please make sure your contributions adhere to the coding standards of the project.

## License

This project is licensed under the [MIT License](LICENSE).
