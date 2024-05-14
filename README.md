# StudySync Network

**https://studysync-network.web.app**

StudySync Network is a web application designed to facilitate group study and assignment management for students and educators. It provides a platform for creating, submitting, and managing assignments efficiently.

# Features

- Navbar with dynamic links based on user authentication status

**Create Assignment Page (Private):**

- Form for creating assignments with various parameters including title, description, marks, due date, etc.Success message upon successful assignment creation

**Assignments Page (Public):**

- Displays all assignments with filtering options based on difficulty level
- Allows users to delete, update, and view assignments
- Only Delete is supported for creator of the assignment
- Supports submission of assignments with PDF/doc links and notes

**My Submitted/Attempted Assignment Page (Private):**

- Shows assignments submitted by the logged-in user

**Pending Assignments Page (Private):**

- Lists pending assignments submitted by any user
- Allows marking and feedback provision for pending assignments
- Checking before submitting marks, user can not mark own submitted assignment.

**Authentication:**

- User-friendly login and registration pages
- Validation implemented for all authentication-related forms
- JWT Implementation:
- JWT token creation upon user login for secure authentication

**Extra Features**

- Integration of PDF preview functionality using iframes for better user experience
- Theme toggling feature allowing users to switch between light and dark themes
- Spinner when the data is in a loading state

**Technologies Used**

- Frontend: React.js, Tailwind CSS
- Backend: Express.js, MongoDB
- Authentication: Firebase Authentication
- Others: JWT for token-based authentication, React Datepicker for date selection
