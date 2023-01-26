import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/SignIn/Login";
import OfferPage from "../../pages/OfferPage/OfferPage";
import SearchPage from "../../pages/SearchPage/SearchPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/offers",
        element: <OfferPage></OfferPage>,
      },
      {
        path: "/searchpage",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);