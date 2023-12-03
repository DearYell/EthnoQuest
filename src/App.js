import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Register";
import AdminVerification from "./AdminVer";
import SignInSide from "./Login";
import Dashboard from "./dashboard";
import Capitals from "./AllCapitals";
import MHistory from "./MHistory";
import MCulture from "./MCulture";
import MHoliday from "./MHoliday";
import MTradition from "./MTradition";
import MyProfile from "./MyProfile";
import QuizHistory from "./QuizHistory";
import AdminDashboard from "./dashboardAdmin";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

//import Quiz from "./Quiz"
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

        <Route path="/Login" element={<SignInSide />} />
        <Route path="/Register" element={<RegistrationForm />} />
        <Route path="/AdminVer" element={<AdminVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AllCapitals" element={<Capitals />} />
          <Route path="/MHistory" element={<MHistory />} />
          <Route path="/MCulture" element={<MCulture />} />
          <Route path="/MTradition" element={<MTradition />} />
          <Route path="/MHoliday" element={<MHoliday />} />
          <Route path="/MHistory/:id" element={<MHistory />} />
          <Route path="/MCulture/:id" element={<MCulture />} />
          <Route path="/MTradition/:id" element={<MTradition />} />
          <Route path="/MHoliday/:id" element={<MHoliday />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/QuizHistory" element={<QuizHistory />} />
          {/* <Route path="/Settings" element={<Settings />} /> */}
          <Route path="/dashboardAdmin" element={<AdminDashboard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AdminHistory" element={<AdminHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
