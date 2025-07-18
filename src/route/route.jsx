import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from '../components/Home/Home'
import Shop from "../components/Shop/Shop";
import NotFound from "../components/Shared/NotFound/NotFound";
import OrderReview from "../components/OrderReview/OrderReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home />
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      },
      {
        path:'/order-review',
        element:<OrderReview />
      }
    ],
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
]);

export default router;
