import { PageProvider } from "./context/PageContext";
import { UserProvider } from "./context/UserContext";
import { SearchProvider } from "./context/SearchContext";
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
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </PageProvider>
      </UserProvider>
    </>
  );
}

export default App;
