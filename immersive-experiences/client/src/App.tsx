import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import CreateExperience from "./pages/CreateExperience";
import ExperiencePage, { experienceLoader } from "./pages/ExperiencePage";
import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />,
      <Route path="/create" element={<CreateExperience />} />,
      <Route path="/experiences" element={<ExperiencesPage />} />,
      <Route
        path="/experiences/:id"
        element={<ExperiencePage />}
        loader={experienceLoader}
      />
      ,
      <Route path="*" element={<NotFoundPage />} />,
    </Route>,
  ])
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
