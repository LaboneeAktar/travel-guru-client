import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://travel-guru-server-xi.vercel.app/places"),
      },
    ],
  },
]);

export default router;
