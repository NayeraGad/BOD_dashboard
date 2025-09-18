import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components";
import {
  Dashboard,
  EditPostPage,
  EditTodoPage,
  EditUserPage,
  LoginPage,
  NotFoundPage,
  PostsPage,
  TodosPage,
  UsersPage,
} from "./pages";
import { AuthProvider, SidebarProvider } from "./context";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/edit/:id",
        element: (
          <ProtectedRoute>
            <EditUserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "posts",
        element: (
          <ProtectedRoute>
            <PostsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts/edit/:id",
        element: (
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "todos",
        element: (
          <ProtectedRoute>
            <TodosPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/todos/edit/:id",
        element: (
          <ProtectedRoute>
            <EditTodoPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "login", element: <LoginPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            position: "top-right",
            duration: 2000,
          }}
        />
      </SidebarProvider>
    </AuthProvider>
  );
};

export default App;
