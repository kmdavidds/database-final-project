import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./pages/ErrorBoundary";
import CustomerLogin from "./pages/CustomerLogin";
import Landing from "./pages/Landing";
import CustomerRegister from "./pages/CustomerRegister";
import "./index.css";
import axios from "axios";
import AdminLogin from "./pages/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
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
