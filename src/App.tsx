import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useGetUsers } from "./hooks/useGetUsers";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Loaders from "./components/Loaders";
import { ErrorBoundary } from "./components/ErrorBoundary";

const DashboardLayout = lazy(() => import("./pages/DashboardLayout"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const UserDetails = lazy(() => import("./components/UserDetails"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      ErrorBoundary: ErrorBoundary,
    },
    {
      path: "/dashboard/users",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loaders />}>
            <DashboardLayout />
          </Suspense>
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loaders />}>
              <Dashboard />
            </Suspense>
          ),
          loader: useGetUsers,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "/dashboard/users/:userId",
          element: (
            <ProtectedRoutes>
              <Suspense fallback={<Loaders />}>
                <UserDetails />
              </Suspense>
            </ProtectedRoutes>
          ),
          loader: useGetUsers,
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
