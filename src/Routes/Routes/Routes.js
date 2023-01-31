import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../../Layout/AdminDashboard";
import Main from "../../Layout/Main";
import UserDashboard from "../../Layout/UserDashboard";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/SignIn/Login";
import OfferPage from "../../pages/OfferPage/OfferPage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import ManageAccount from "../../pages/UserDashboard/MyAccount/ManageAccount/ManageAccount";
import Notifications from "../../pages/UserDashboard/Notifications/Notifications";
import Profile from "../../pages/UserDashboard/Profile/Profile";
import Trips from "../../pages/UserDashboard/Trips/Trips";
import Wishlists from "../../pages/UserDashboard/Wishlists/Wishlists";
import Modals from "../../Test/SinglePage/Modals/Modals";
import SinglePage from "../../Test/SinglePage/SinglePage";
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
    path: "/myaccount",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/myaccount",
        element: <ManageAccount></ManageAccount>,
      },
      {
        path: "/myaccount/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/myaccount/trips",
        element: <Trips></Trips>,
      },
      {
        path: "/myaccount/notification",
        element: <Notifications></Notifications>,
      },
      {
        path: "/myaccount/wishlists",
        element: <Wishlists></Wishlists>,
      },
    ],
  },
  // admin dashboard routes
  {
    path: "/dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
]);
