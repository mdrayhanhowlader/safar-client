import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/SignIn/Login";
import SearchPage from "../../pages/SearchPage/SearchPage";
import ManageAccount from "../../pages/UserDashboard/MyAccount/ManageAccount/ManageAccount";
import UserDashboard from "../../Layout/UserDashboard";
import Profile from "../../pages/UserDashboard/Profile/Profile";
import Trips from "../../pages/UserDashboard/Trips/Trips";
import Notifications from "../../pages/UserDashboard/Notifications/Notifications";
import Wishlists from "../../pages/UserDashboard/Wishlists/Wishlists";
import SingleProductCard from "../../pages/SearchPage/SearchProducts/SearchProductCard/SingleProductCard";
// import OfferPage from "../../pages/OfferPage/OfferPage";
import Register from "../../pages/Login/Register/Register";
import FAQ from "../../pages/Shared/Footer/FAQ";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import OurTeam from "../../pages/Shared/Footer/OurTeam";
import Checkout from "../../pages/Checkout/Checkout";
import BecomeOrganizer from "../../pages/Shared/Footer/BecomeOrganizer/BecomeOrganizer";
import OrganizerForm from "../../pages/Shared/Footer/BecomeOrganizer/OrganizerForm";
import DestinationPage from "../../pages/Home/Destination/DestinationPage";
import Modals from "../../pages/SinglePage/Modals/Modals";
import SinglePage from "../../pages/SinglePage/SinglePage";
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
import OrganizersLogin from "../../pages/Shared/Footer/BecomeOrganizer/OrganizersLogin";
import SellerProfile from "../../pages/Seller/SellerProfile/SellerProfile";
import ManageHotels from "../../pages/Admin/Properties/Hotels/ManageHotels/ManageHotels";
import PendingHotels from "../../pages/Admin/Properties/Hotels/PendingHotels/PendingHotels";
import BlockedHotels from "../../pages/Admin/Properties/Hotels/BlockedHotels/BlockedHotels";
import AllOrders from "../../pages/Admin/AdminOrders/AllOrders/AllOrders";
import CompletedOrders from "../../pages/Admin/AdminOrders/CompletedOrders/CompletedOrders";
import CanceledOrders from "../../pages/Admin/AdminOrders/CanceledOrders/CanceledOrders";
import AllAdmin from "../../pages/Admin/ManageAccount/AllAdmin/AllAdmin";
import Editors from "../../pages/Admin/ManageAccount/Editors/Editors";
import Organizer from "../../pages/Admin/ManageAccount/Organizer/Organizer";
import AllUsers from "../../pages/Admin/ManageAccount/AllUsers/AllUsers";
import LiveChat from "../../pages/Admin/AdminMessage/LiveChat/LiveChat";
import MessageToOrganizer from "../../pages/Admin/AdminMessage/MessageToOrganizer/MessageToOrganizer";
import MessageToCustomer from "../../pages/Admin/AdminMessage/MessageToCustomer/MessageToCustomer";
import MessageToSubscriber from "../../pages/Admin/AdminMessage/MessageToSubscriber/MessageToSubsciber";
import PaymentsReceived from "../../pages/Admin/AdminFinance/PaymentsReceived/PaymentsReceived";
import PayoutToOrganizer from "../../pages/Admin/AdminFinance/PayoutToOrganizer/PayoutToOrganizer";
import RefundToCustomer from "../../pages/Admin/AdminFinance/RefundToCustomer/RefundToCustomer";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import RegisterGuide from "../../pages/Guides/RegisterGuide";
import LoginGuide from "../../pages/Guides/LoginGuide";
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
        path: "/checkoutPage",
        element: <CheckoutPage />,
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
        path: "/orglogin",
        element: <OrganizersLogin />,
      },
      {
        path: "/registerguide",
        element: <RegisterGuide/>
      },
      {
        path: "/loginguide",
        element: <LoginGuide/>
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
    children: [
      {
        path: "/dashboard/managehotel",
        element: <ManageHotels></ManageHotels>,
      },
      {
        path: "/dashboard/pendingHotel",
        element: <PendingHotels></PendingHotels>,
      },
      {
        path: "/dashboard/blockedhotel",
        element: <BlockedHotels></BlockedHotels>,
      },
      {
        path: "/dashboard/allorders",
        element: <AllOrders></AllOrders>,
      },
      {
        path: "/dashboard/completedorders",
        element: <CompletedOrders></CompletedOrders>,
      },
      {
        path: "/dashboard/canceledorders",
        element: <CanceledOrders></CanceledOrders>,
      },
      {
        path: "/dashboard/alladmin",
        element: <AllAdmin></AllAdmin>,
      },
      {
        path: "/dashboard/editors",
        element: <Editors></Editors>,
      },
      {
        path: "/dashboard/organizer",
        element: <Organizer></Organizer>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/livechat",
        element: <LiveChat></LiveChat>,
      },
      {
        path: "/dashboard/toOrganizer",
        element: <MessageToOrganizer></MessageToOrganizer>,
      },
      {
        path: "/dashboard/tocustomer",
        element: <MessageToCustomer></MessageToCustomer>,
      },
      {
        path: "/dashboard/tosubscriber",
        element: <MessageToSubscriber></MessageToSubscriber>,
      },
      {
        path: "/dashboard/paymentreceived",
        element: <PaymentsReceived></PaymentsReceived>,
      },
      {
        path: "/dashboard/payoutToOrganizer",
        element: <PayoutToOrganizer></PayoutToOrganizer>,
      },
      {
        path: "/dashboard/refundtocustomer",
        element: <RefundToCustomer></RefundToCustomer>,
      },
    ],
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
        path: "/sellerdashboard/sellerprofile",
        element: <SellerProfile></SellerProfile>,
      },
    ],
  },
]);
