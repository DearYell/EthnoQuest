import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Register";
import AdminVerification from "./AdminVer";
import SignInSide from "./Login";
import Dashboard from "./dashboard";
import Capitals from "./AllCapitals";
import MCulture from "./MCulture";
import MHoliday from "./MHoliday";
import MHistory from "./MHistory";
import MTradition from "./MTradition";


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
          <Route path="/MCulture" element={<MCulture />} />
          <Route path="/MHoliday" element={<MHoliday />} />
          <Route path="/MHistory" element={<MHistory/>} />
          <Route path="/MTradition" element={<MTradition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
