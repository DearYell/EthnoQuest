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
<<<<<<< HEAD
import Quiz from "./Quiz";
// import AboutUs from "./AboutUs";
=======
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import AdminHistory from "./AdminHistory";
import AdminTradition from "./AdminTradition";
import AdminQuizItems from "./AdminQuizItems";
>>>>>>> 9d5843e8a5ab077048309239f690e72f7e665841

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route index element={<SignInSide />} />
=======
        <Route index element={<SignInSide />} />
>>>>>>> 9d5843e8a5ab077048309239f690e72f7e665841
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
<<<<<<< HEAD
          <Route path="/dashboardAdmin" element={<AdminDashboard />} />
          <Route path="/Quiz" element={<Quiz />} />
=======
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AdminAddItems" element={<AdminQuizItems />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AdminHistory" element={<AdminHistory />} />
          <Route path="/AdminTradition" element={<AdminTradition />} />
>>>>>>> 9d5843e8a5ab077048309239f690e72f7e665841
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
