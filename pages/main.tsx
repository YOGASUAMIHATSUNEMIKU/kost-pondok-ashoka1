// Static entry for GitHub Pages: renders the same home page without the TanStack server.
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import { Index } from "../src/routes/index";

createRoot(document.getElementById("root")!).render(<Index />);
