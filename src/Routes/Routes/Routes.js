import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SinglePlace from "../../Pages/SinglePlace/SinglePlace";

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
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://travel-guru-server-xi.vercel.app/places"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/places/:id",
        element: <SinglePlace></SinglePlace>,
        loader: ({ params }) =>
          fetch(`https://travel-guru-server-xi.vercel.app/places/${params.id}`),
      },
    ],
  },
]);

export default router;
