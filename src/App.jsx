import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./Routes/Index";
import Root from "./Routes/Root";
import ErrorPage from "./Routes/ErrorPage";
import Add from "./Routes/Add";
import Edit from "./Routes/Edit";
import Details from "./Routes/Details";

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
        element: <Add />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "plz make sure to insert correct link !",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
