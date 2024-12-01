import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Board } from "../board/board";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/board/:id",
    element: <Board />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
