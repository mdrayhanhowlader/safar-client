import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/SignIn/Login";
import OfferPage from "../../pages/OfferPage/OfferPage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import Deals from "../../Test/CardDashboard/Deals/Deals";
import Info from "../../Test/CardDashboard/Info/Info";
import Overview from "../../Test/CardDashboard/Overview/Overview";
import Photos from "../../Test/CardDashboard/Photos/Photos";
import Reviews from "../../Test/CardDashboard/Reviews/Reviews";
import SinglePage from "../../Test/SinglePage/SinglePage";
import Test from "../../Test/Test";
import Modals from "../../Test/SinglePage/Modals/Modals";

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
        path: "/searchpage/:id",
        element: <SearchPage></SearchPage>,
        loader: async ({ params }) =>
          fetch(
            `https://safar-server-nasar06.vercel.app/destination/get-destination-category/${params.id}`
          ),
      },
      {
        path: "/singlePage",
        element: <SinglePage />,
      },
      {
        path: "/modal",
        element: <Modals />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
    children: [
      {
        path: "/test/overview",
        element: <Overview />,
      },
      {
        path: "/test/info",
        element: <Info />,
      },
      {
        path: "/test/photos",
        element: <Photos />,
      },
      {
        path: "/test/reviews",
        element: <Reviews />,
      },
      {
        path: "/test/deals",
        element: <Deals />,
      },
    ],
  },
]);
