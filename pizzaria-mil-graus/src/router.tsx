import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import Localizacao from "./pages/Localizacao/Localizacao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/localizacao",
    element: <Localizacao />,
  },
]);

export default router;
