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
//import Settings from "./Settings";
import AdminDashboard from "./dashboardAdmin";
<<<<<<< HEAD

//import Quiz from "./Quiz"
// import AboutUs from "./AboutUs";
=======
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
>>>>>>> 90deaf3ddcd758016d1ca83c75893311e79fc3b2

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInSide />} />
          <Route path="/Login" element={<SignInSide />} />
          <Route path="/Register/*" element={<RegistrationForm />} />
          <Route path="/AdminVer" element={<AdminVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AllCapitals" element={<Capitals />} />
          <Route path="/MHistory/:id" element={<MHistory />} />
          <Route path="/MCulture/:id" element={<MCulture />} />
          <Route path="/MTradition/:id" element={<MTradition />} />
          <Route path="/MHoliday/:id" element={<MHoliday />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/QuizHistory" element={<QuizHistory />} />
          {/* <Route path="/Settings" element={<Settings />} /> */}
          <Route path="/dashboardAdmin" element={<AdminDashboard />} />
<<<<<<< HEAD
          <Route path="/QHistory" element={<quizHistory />} />
=======
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
>>>>>>> 90deaf3ddcd758016d1ca83c75893311e79fc3b2
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;