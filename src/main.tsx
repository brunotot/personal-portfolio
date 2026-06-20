import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.scss";
import ThemeProvider from "./theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
