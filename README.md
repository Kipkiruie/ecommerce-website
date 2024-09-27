
# **Lesha-Schedules: Project Management System**

**Lesha-Schedules** is a dynamic and intuitive project management web application built using **Laravel 11** and **React**. It is designed to simplify task management, enhance collaboration, and streamline project tracking for teams of all sizes. With its user-friendly interface and powerful features, managing your projects and tasks becomes more efficient and transparent.

## **Features**

- **User Authentication**
  - Secure **Registration** and **Login** functionality to manage user access.
  
- **Projects Management**
  - Full **CRUD** (Create, Read, Update, Delete) operations for projects.
  - Advanced **sorting**, **filtering**, and **pagination** options for easy project navigation.
  
- **Tasks Management**
  - Manage tasks with **CRUD** operations, along with sorting, filtering, and pagination.
  - Create tasks within specific projects, ensuring seamless task organization.
  - View all tasks or filter tasks within a specific project.
  
- **Task Assignment**
  - Assign tasks to users, track task ownership, and monitor task progress.
  - Quickly view tasks assigned to you for focused task management.

- **Dashboard Overview**
  - Intuitive dashboard providing an overview of all projects, tasks, and team activity.

## **Getting Started**

To get started with Lesha-Schedules, follow these simple steps:

### **Installation**

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/Kipkiruie/lesha-schedules.git
   ```

2. **Navigate to the project root** directory using the terminal:
   ```bash
   cd lesha-schedules
   ```

3. **Set up the environment**:
   - Create an `.env` file by copying the example configuration:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your database credentials and other settings as needed.

4. **Install PHP dependencies** using Composer:
   ```bash
   composer install
   ```

5. **Install front-end dependencies** using npm:
   ```bash
   npm install
   ```

6. **Generate application key** for encryption:
   ```bash
   php artisan key:generate
   ```

7. **Run database migrations and seed the database**:
   ```bash
   php artisan migrate
   ```

8. **Start the Vite development server** for building front-end assets:
   ```bash
   npm run dev
   ```

9. **Start the Laravel application server**:
   ```bash
   php artisan serve
   ```

You're now ready to use **Lesha-Schedules** to manage your projects and tasks efficiently.

## **About Lesha-Schedules**

Lesha-Schedules is a robust project management tool that helps teams organize, prioritize, and track project progress. Built with **Laravel** and **React**, it offers modern features like task assignment, real-time collaboration, and a mobile-friendly interface to ensure that your team stays productive, no matter where they are.

The app is ideal for small and medium-sized teams looking for an easy-to-use yet powerful platform to handle their project workflows. Whether you’re tracking daily tasks or managing long-term projects, Lesha-Schedules provides all the tools you need to stay on top of your work.

## **Contributors**

This project is actively maintained and developed by:

- [@Kipkiruie](https://github.com/Kipkiruie) - Kipkiruie
- [@Lesuuda](https://github.com/Lesuuda) - Lesuuda Ljamani

## **Contributing**

Contributions are welcome! If you would like to help improve Lesha-Schedules, please feel free to submit a pull request or open an issue.


## **License**

This project is licensed under the MIT License.
