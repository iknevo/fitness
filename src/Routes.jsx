import { createBrowserRouter, Navigate } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MealsPage from "./pages/MealsPage";
import PageNotFound from "./pages/PageNotFound";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import WorkoutsPage from "./pages/WorkoutsPage";

const myRouter = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <Navigate to="home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "meals",
        element: <MealsPage />,
      },
      {
        path: "workouts",
        element: <WorkoutsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default myRouter;
