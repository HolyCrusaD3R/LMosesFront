import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import ChatPage from "./pages/ChatPage";
import NewsPage from "./pages/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "aboutus", element: <AboutUsPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "chat", element: <ChatPage /> },
    ],
  },
  // {
  //   path: "checkout",
  //   element: <CheckoutLayout />,
  //   children: [
  //     { index: true, element: <CheckoutDetailsPage /> },
  //     { path: "shipping", element: <CheckoutShippingPage /> },
  //     { path: "payment", element: <CheckoutPaymentPage /> },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
