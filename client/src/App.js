import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Sign from "./pages/Sign";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/signIn" element={<Sign />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
