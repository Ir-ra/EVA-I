import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Examples } from "./pages/Examples/Examples";
import { Pricing } from "./pages/Pricing/Pricing";
import { Layout } from "./components/Layout/Layout";
import { Error } from "./pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="examples" element={<Examples />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
