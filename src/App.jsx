import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./Routes/Index";
import Root from "./Routes/Root";
import ErrorPage from "./Routes/ErrorPage";
import AddPost from "./Routes/AddPost";
import Edit from "./Routes/Edit";
import Details from "./Routes/Details";

const paramHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "plz make sure to insert correct link !",
      status: 400,
    });
  }
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "post/",
        element: <Index />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
        loader: paramHandler,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: paramHandler,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
