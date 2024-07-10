import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Generator from "./components/landing/Generator";
import Results from "./components/suggestions/Results";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Generator />, errorElement: "" },
    { path: "/results", element: <Results />, errorElement: "" },
  ]);

  return <RouterProvider router={router} />;
}
