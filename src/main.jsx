import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./pages/ErrorBoundary";
import CustomerLogin from "./pages/CustomerLogin";
import Landing from "./pages/Landing";
import CustomerRegister from "./pages/CustomerRegister";

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
    path: "/*",
    element: <NotFound />,
  },
]);

const queryClient = new QueryClient({});

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#efbb07',
      },
      secondary: {
        light: '#e2145f',
        main: '#481852',
        dark: '#8d0c55',
      },
    },
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
