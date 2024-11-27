import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import Localizacao from "./pages/Localizacao/Localizacao";
import Promocoes from "./pages/Promocoes/Promocoes";

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
  {
    path: "/promocoes",
    element: <Promocoes />,
  },
]);

export default router;
