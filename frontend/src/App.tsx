import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Generator from "./components/landing/Generator";
import Results from "./components/results/Results";

export default function App() {
  const [results, setResults] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Generator setResults={setResults} />,
    },
    {
      path: "/results",
      element: <Results results={results} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
