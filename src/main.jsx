import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Root from "./routes/Root";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Registration";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import CreateAssignment from "./pages/CreateAssignment/CreateAssignment";
import Assignments from "./pages/Assignments/Assignments";
import AssignmentDetails from "./pages/Assignments/AssignmentDetails";
import UpdateAssignment from "./pages/Assignments/UpdateAssignment";
import TakeAssignment from "./pages/Assignments/TakeAssignment";
import PendingAssignment from "./pages/PendingAssignment/PendingAssignment";
import PendingAssignmentMarking from "./pages/PendingAssignment/PendingAssignmentMarking";
import AttemptedAssignment from "./pages/AttemptedAssignment/AttemptedAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/createassignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:3000/assignments"),
      },
      {
        path: "/assignmentdetails/:_id",
        element: <AssignmentDetails></AssignmentDetails>,
      },
      {
        path: "/updateassignment/:_id",
        element: <UpdateAssignment></UpdateAssignment>,
      },
      {
        path: "/takeassignment/:_id",
        element: <TakeAssignment></TakeAssignment>,
      },
      {
        path: "/pendingassignment",
        element: <PendingAssignment></PendingAssignment>,
      },
      {
        path: "/pendingassignmentmarking/:_id",
        element: <PendingAssignmentMarking></PendingAssignmentMarking>,
      },
      {
        path: "attemptedassignment",
        element: <AttemptedAssignment></AttemptedAssignment>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
