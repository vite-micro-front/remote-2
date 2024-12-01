import { createBrowserRouter } from "react-router-dom";
import { Board } from "../board/board";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore((state = {}, action) => state);

const router = createBrowserRouter([
  {
    path: "/board/:id",
    element: (
      <Provider store={store}>
        <Board />
      </Provider>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
