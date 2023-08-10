import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider , Outlet  } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import appStore from "./Components/utils/appStore";

const Lazyload = lazy( () => import("./Components/Lazyload"))  ;

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback="About page is loading now">
          <Lazyload />
        </Suspense>,

      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        
      },
      
      {
        path: "/cart",
        element: <Cart />,
        
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);