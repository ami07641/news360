import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news-details/:id",
        element: <NewsDetails />,
      },
    ],
  },
]);
export default router;
