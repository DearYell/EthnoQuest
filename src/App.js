import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Register";
import AdminVerification from "./AdminVer";
import SignInSide from "./Login";
import Dashboard from "./dashboard";
import Capitals from "./AllCapitals";
import Profile from "./MyProfile";
import QuizHistory from "./QuizHistory";
import Settings from "./Settings";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInSide />} />
          <Route path="/Login" element={<SignInSide />} />
          <Route path="/Register" element={<RegistrationForm />} />
          <Route path="/AdminVer" element={<AdminVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AllCapitals" element={<Capitals />} />
          <Route path="/MyProfile" element={<Profile />} />
          <Route path="/QuizHistory" element={<QuizHistory />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
