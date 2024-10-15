import "./index.css";
import * as React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import navConstants from "./constants/navStrings";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Sources from "./pages/Sources";

export default function App() {
  const element = useRoutes([
    {
      path: navConstants.HOME,
      element: <Home />,
    },
    {
      path: navConstants.CONTACT,
      element: <Contact />,
    },
    {
      path: navConstants.PROJECTS,
      element: <Projects />,
    },
    {
      path: navConstants.SOURCES,
      element: <Sources />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return <>{React.cloneElement(element, { key: location.pathname })}</>;
}
