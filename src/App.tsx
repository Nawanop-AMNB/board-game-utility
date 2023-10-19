import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TheCoding from "./modules/TheCoding";
import Home from "./modules/Home";
import { BASE_PATH } from "./config/constants";

const router = createBrowserRouter([
  {
    path: [BASE_PATH, "the-coding"].join("/"),
    element: <TheCoding />,
  },
  {
    path: [BASE_PATH].join("/"),
    element: <Home />,
  },
  {
    errorElement: <>Error!</>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
