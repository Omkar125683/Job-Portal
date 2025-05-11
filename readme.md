# Job Portal

A full-stack Job Portal application that allows users to search, apply for jobs, and manage job postings. The platform supports two types of users: **Students** (job seekers) and **Recruiters** (job posters). It is built using **React** for the frontend and **Node.js** with **Express** for the backend, and it uses **MongoDB** as the database.

## Features

### For Students
- **Browse Jobs**: Search and filter jobs based on title, description, or location.
- **Apply for Jobs**: Submit applications for available job postings.
- **Profile Management**: Update personal details, skills, and upload resumes.
- **View Applied Jobs**: Track the status of job applications.

### For Recruiters
- **Company Management**: Create and manage company profiles.
- **Post Jobs**: Add job postings with details like title, description, salary, and requirements.
- **View Applicants**: Manage and shortlist applicants for job postings.

### General Features
- **Authentication**: Secure login and signup for both students and recruiters.
- **Role-Based Access**: Different functionalities for students and recruiters.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Real-Time Updates**: Instant updates for job postings and applications.

---


---

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-portal.git
   cd job-portal

PORT=3000
MONGO_URI=<your-mongodb-connection-string>
_SECRETJWT=<your-jwt-secret>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

