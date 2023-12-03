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
import Settings from "./Settings";
import AdminDashboard from "./dashboardAdmin";
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";
// import AboutUs from "./AboutUs";

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
          <Route path="/MHistory" element={<MHistory />} />
          <Route path="/MCulture" element={<MCulture />} />
          <Route path="/MTradition" element={<MTradition />} />
          <Route path="/MHoliday" element={<MHoliday />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/QuizHistory" element={<QuizHistory />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/dashboardAdmin" element={<AdminDashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz2" element={<Quiz2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
