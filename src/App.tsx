import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import NotFound from "./pages/404";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:idOrName" element={<Pokemon />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
