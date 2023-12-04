<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Register";
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
import Quiz from "./Quiz";
// import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInSide />} />
          <Route path="/Login" element={<SignInSide />} />
          <Route path="/Register" element={<RegistrationForm />} />
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
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
=======
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
import AdminHistory from "./AdminHistory";
import AdminTradition from "./AdminTradition";

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
          <Route path="/AdminTradition" element={<AdminTradition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
>>>>>>> 0b32e918d3d93cacf24440f63c67b0709ab22029
