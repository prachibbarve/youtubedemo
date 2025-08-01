import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={AppStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
