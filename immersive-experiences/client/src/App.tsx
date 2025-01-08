import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />,
      <Route path="/experiences" element={<ExperiencesPage />} />,
    </Route>,
  ])
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
