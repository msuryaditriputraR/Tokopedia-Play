import { PageProvider } from "./context/PageContext";
import { UserProvider } from "./context/UserContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/video/:videoId",
    element: <Detail />,
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <PageProvider>
          <RouterProvider router={router} />
        </PageProvider>
      </UserProvider>
    </>
  );
}

export default App;
