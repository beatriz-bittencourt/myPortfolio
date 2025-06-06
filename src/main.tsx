import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/NavBar";
import SocialBar from "./components/SocialBar";
import About from "./components/About";
import Projects from "./components/Projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <SocialBar />
      <App />
      <About />
      <Projects />
    </BrowserRouter>
  </StrictMode>
);
