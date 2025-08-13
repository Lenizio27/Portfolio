import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Paths;