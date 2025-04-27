import { RouterProvider } from "react-router";
import myRouter from "./Routes.jsx";

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
