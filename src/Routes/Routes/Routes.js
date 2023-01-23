import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/SignIn/Login";
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
        path: "/searchpage",
        element: <SearchPage></SearchPage>,
      },
      // {
      //   path: '/test',
      //   element: <Test />
      // },
      // {
      //   path: "/testRayhan",
      //   element: <TestRayhan />
      // }
    ],
  },
  {
    path: '/test',
    element: <Test />,
    children: [
      {
        path: "/test/overview",
        element: <Overview />
      },
      {
        path: '/test/info',
        element: <Info />
      },
      {
        path: '/test/photos',
        element: <Photos />
      },
      {
        path: '/test/reviews',
        element: <Reviews />
      },
      {
        path: '/test/deals',
        element: <Deals />
      }
    ]
  }
]);