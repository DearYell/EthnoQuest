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
import Settings from "./Settings";
// import QuizCustomize from "./QuizCustomize";
// import AboutUs from "./AboutUs";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import AdminHistory from "./AdminHistory";
import AdminTradition from "./AdminTradition";
import AdminHoliday from "./AdminHoliday";
import AdminCulture from "./AdminCulture";
import AdminQuizItems from "./AdminQuizItems";
import UserProfile from "./UserProfile";

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
          AC
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
          {<Route path="/Settings" element={<Settings />} /> }
          <Route path="/dashboardAdmin" element={<AdminDashboard />} />
          <Route path="/Quiz" element={<Quiz />} />
          {/* <Route path="/QuizCustomize" element={<QuizCustomize />} /> */}
          <Route path="/AdminAddItems" element={<AdminQuizItems />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AdminHistory" element={<AdminHistory />} />
          <Route path="/AdminTradition" element={<AdminTradition />} />
          <Route path="/AdminHoliday" element={<AdminHoliday />} />
          <Route path="/AdminCulture" element={<AdminCulture />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}
export default App;
