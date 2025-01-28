// import { createContext, useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import GoalDetails from "./components/GoalDetails";
import { ThemeContext } from "./contexts/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/calendar/:id" element={<GoalDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ThemeContext.Provider value={"Dark Mode"}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
