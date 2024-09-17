import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { UserContextProvider } from "./Contexts/UserContext.jsx";
import { CartContextProvider } from "./Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <NextUIProvider>
          <App />
          <Toaster position="top-right" richColors />
        </NextUIProvider>
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
);
