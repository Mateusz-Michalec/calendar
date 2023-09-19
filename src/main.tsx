import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CalendarProvider } from "./context/CalendarProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CalendarProvider>
    <App />
  </CalendarProvider>
);
