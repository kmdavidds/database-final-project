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
import ItemManagement from "./pages/admin/ItemManagement";
import ItemAdd from "./pages/admin/ItemAdd";
import ComputerManagement from "./pages/admin/ComputerManagement";
import ComputerAdd from "./pages/admin/ComputerAdd";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Order from "./pages/customer/Order";
import OrderManagement from "./pages/admin/OrderManagement";
import Reservation from "./pages/admin/Reservation";
import Session from "./pages/admin/Session";
import ReservationAdd from "./pages/admin/ReservationAdd";
import SessionAdd from "./pages/admin/SessionAdd";
import StaffDashboard from "./pages/staff/StaffDashboard";
import ItemManagementStaff from "./pages/staff/ItemManagementStaff";
import ComputerManagementStaff from "./pages/staff/ComputerManagementStaff";
import ReservationStaff from "./pages/staff/ReservationStaff";
import ReservationAddStaff from "./pages/staff/ReservationAddStaff";
import SessionStaff from "./pages/staff/SessionStaff";
import SessionAddStaff from "./pages/staff/SessionAddStaff";
import OrderManagementStaff from "./pages/staff/OrderManagementStaff";
import Membership from "./pages/customer/Membership";
import Report from "./pages/admin/Report";

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
    path: "/admin/dashboard/staffs",
    element: <StaffManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/staffs/add",
    element: <StaffAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/customers",
    element: <CustomerManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/items",
    element: <ItemManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/items/add",
    element: <ItemAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/computers",
    element: <ComputerManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/computers/add",
    element: <ComputerAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/reservations",
    element: <Reservation />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/reservations/add",
    element: <ReservationAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/sessions",
    element: <Session />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/sessions/add",
    element: <SessionAdd />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/orders",
    element: <OrderManagement />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/dashboard/report",
    element: <Report />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard",
    element: <StaffDashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/items",
    element: <ItemManagementStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/computers",
    element: <ComputerManagementStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/reservations",
    element: <ReservationStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/reservations/add",
    element: <ReservationAddStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/sessions",
    element: <SessionStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/sessions/add",
    element: <SessionAddStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/staff/dashboard/orders",
    element: <OrderManagementStaff />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/customer/dashboard",
    element: <CustomerDashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/customer/order",
    element: <Order />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/customer/membership",
    element: <Membership />,
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
