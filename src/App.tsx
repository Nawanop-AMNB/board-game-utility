import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/Home";
import TheCoding from "./modules/TheCoding";

const router = createHashRouter([
  {
    path: ["/the-coding"].join("/"),
    element: <TheCoding />,
  },
  {
    path: ["/"].join("/"),
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
