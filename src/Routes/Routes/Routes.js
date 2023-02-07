import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/SignIn/Login";
import SearchPage from "../../pages/SearchPage/SearchPage";
import SinglePage from "../../Test/SinglePage/SinglePage";
import Modals from "../../Test/SinglePage/Modals/Modals";
import ManageAccount from "../../pages/UserDashboard/MyAccount/ManageAccount/ManageAccount";
import UserDashboard from "../../Layout/UserDashboard";
import Profile from "../../pages/UserDashboard/Profile/Profile";
import Trips from "../../pages/UserDashboard/Trips/Trips";
import Notifications from "../../pages/UserDashboard/Notifications/Notifications";
import Wishlists from "../../pages/UserDashboard/Wishlists/Wishlists";
import Register from "../../pages/Login/Register/Register";
import FAQ from "../../pages/Shared/Footer/FAQ";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import OurTeam from "../../pages/Shared/Footer/OurTeam";
import Checkout from "../../pages/Checkout/Checkout";
import BecomeOrganizer from "../../pages/Shared/Footer/BecomeOrganizer/BecomeOrganizer";
import OrganizerForm from "../../pages/Shared/Footer/BecomeOrganizer/OrganizerForm";
import DestinationPage from "../../pages/Home/Destination/DestinationPage";
import AdminDashboard from "../../Layout/AdminDashboard";
import CancelSellerOrder from "../../pages/Seller/Orders/CancelSellerOrder/CancelSellerOrder";
import ManageSellerOrder from "../../pages/Seller/Orders/ManageSellerOrder/ManageSellerOrder";
import ManageSellerReview from "../../pages/Seller/Orders/ManageSellerReview/ManageSellerReview";
import AddSellerProduct from "../../pages/Seller/Products/AddSellerProduct/AddSellerProduct";
import ManageSellerProduct from "../../pages/Seller/Products/ManageSellerProduct/ManageSellerProduct";
import SellerDashboard from "../../Layout/SellerDashboard";
import OfferPage from "../../pages/OfferPage/OfferPage";
import SellerCampaign from "../../pages/Seller/Promotions/SellerCampaign";
import SellerOffer from "../../pages/Seller/Promotions/SellerOffer";
import SellerProfile from "../../pages/Seller/SellerProfile/SellerProfile";
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
      {
        path: "/searchpage",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/searchpage/:city",
        element: <SearchPage></SearchPage>,
        loader: async ({ params }) =>
          fetch(
            `https://safar-server-nasar06.vercel.app/destination/get-destination-category/${params.city}`
          ),
      },
      {
        path: "/singlePage/:id",
        element: <SinglePage />,
        loader: async ({ params }) =>
          fetch(
            `https://safar-server-nasar06.vercel.app/destination/get-hotel-details/${params.id}`
          ),
      },
      {
        path: "/destinationPage/:city",
        element: <DestinationPage></DestinationPage>,
        loader: async ({ params }) =>
          fetch(
            `https://safar-server-nasar06.vercel.app/destination/get-destination-category/${params.city}`
          ),
      },
      {
        path: "/modal",
        element: <Modals />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/organizer",
        element: <BecomeOrganizer />,
      },
      {
        path: "/orgform",
        element: <OrganizerForm />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
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
  // Seller Dashboard routes
  {
    path: "/sellerdashboard",
    element: <SellerDashboard></SellerDashboard>,
    children: [
      {
        path: "/sellerdashboard/addsellerproduct",
        element: <AddSellerProduct></AddSellerProduct>,
      },
      {
        path: "/sellerdashboard/managesellerproduct",
        element: <ManageSellerProduct></ManageSellerProduct>,
      },
      {
        path: "/sellerdashboard/managesellerorder",
        element: <ManageSellerOrder></ManageSellerOrder>,
      },
      {
        path: "/sellerdashboard/managesellerreview",
        element: <ManageSellerReview></ManageSellerReview>,
      },
      {
        path: "/sellerdashboard/cancelsellerorder",
        element: <CancelSellerOrder></CancelSellerOrder>,
      },
      {
        path: "/sellerdashboard/sellercampaign",
        element: <SellerCampaign></SellerCampaign>,
      },
      {
        path: "/sellerdashboard/selleroffer",
        element: <SellerOffer></SellerOffer>,
      },
      {
        path: '/sellerdashboard/sellerprofile',
        element: <SellerProfile></SellerProfile>
      }
    ],
  },
]);
