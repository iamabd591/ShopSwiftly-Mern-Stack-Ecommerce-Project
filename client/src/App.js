import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Sign from "./pages/Sign";
import PersonalInfo from "./pages/SignUp";
import ResidtionalInfo from "./pages/Signup_step_2";
import BankInfo from "./pages/Signup_step_3";
import Policy from "./pages/Policy";
import Feadback from "./pages/feadback";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/signIn" element={<Sign />} />
        <Route path="/SignUp" element={<PersonalInfo />} />
        <Route path="/signup_step_2" element={<ResidtionalInfo />} />
        <Route path="/signup_step_3" element={<BankInfo />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/feadback" element={<Feadback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
