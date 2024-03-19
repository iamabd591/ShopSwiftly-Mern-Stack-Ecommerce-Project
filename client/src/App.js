import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Sign from "./pages/Sign";
import SignUp from "./pages/SignUp";
import Policy from "./pages/Policy";
import Feedback from "./pages/feadback";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/signIn" element={<Sign />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/feadback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
