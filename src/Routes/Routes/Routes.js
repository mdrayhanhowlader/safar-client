import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/SignIn/Login";
import SearchPage from "../../pages/SearchPage/SearchPage";
import Deals from "../../Test/CardDashboard/Deals/Deals";
import Info from "../../Test/CardDashboard/Info/Info";
import Overview from "../../Test/CardDashboard/Overview/Overview";
import Photos from "../../Test/CardDashboard/Photos/Photos";
import Reviews from "../../Test/CardDashboard/Reviews/Reviews";
import SinglePage from "../../Test/SinglePage/SinglePage";
import Test from "../../Test/Test";
import Modals from "../../Test/SinglePage/Modals/Modals";
import ManageAccount from "../../pages/UserDashboard/MyAccount/ManageAccount/ManageAccount";
import UserDashboard from "../../Layout/UserDashboard";
import Profile from "../../pages/UserDashboard/Profile/Profile";
import Trips from "../../pages/UserDashboard/Trips/Trips";
import Notifications from "../../pages/UserDashboard/Notifications/Notifications";
import Wishlists from "../../pages/UserDashboard/Wishlists/Wishlists";
import OfferPage from "../../pages/OfferPage/OfferPage";

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
  // user dashboard routes
  {
    path: '/myaccount',
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: '/myaccount',
       element: <ManageAccount></ManageAccount>
      },
      {
        path: '/myaccount/profile',
        element: <Profile></Profile>
      },
      {
        path: '/myaccount/trips',
        element: <Trips></Trips>
      },
      {
        path: '/myaccount/notification',
        element: <Notifications></Notifications>
      },
      {
        path: '/myaccount/wishlists',
        element: <Wishlists></Wishlists>
      }
    ]
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
