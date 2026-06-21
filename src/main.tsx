import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.scss";
import CompanyPage from "./pages/CompanyPage";
import ThemeProvider from "./theme/ThemeProvider";

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/company", element: <CompanyPage /> },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
