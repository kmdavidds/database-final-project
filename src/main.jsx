import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./pages/ErrorBoundary";
import CustomerLogin from "./pages/customer/CustomerLogin";
import Landing from "./pages/Landing";
import CustomerRegister from "./pages/customer/CustomerRegister";
import "./index.css";
import axios from "axios";
import AdminLogin from "./pages/admin/AdminLogin";
import StaffLogin from "./pages/staff/StaffLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffManagement from "./pages/admin/StaffManagement";
import StaffAdd from "./pages/admin/StaffAdd";
import CustomerManagement from "./pages/admin/CustomerManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/customer/login",
    element: <CustomerLogin />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/customer/register",
    element: <CustomerRegister />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/login",
    element: <StaffLogin />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/staffs",
    element: <StaffManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/customers",
    element: <CustomerManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/staffs/add",
    element: <StaffAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
