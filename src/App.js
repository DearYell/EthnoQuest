import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Register";
import AdminVerification from "./AdminVer";
import SignInSide from "./Login";
import Dashboard from "./dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInSide />} />
          <Route path="/Register" element={<RegistrationForm />} />
          <Route path="/AdminVer" element={<AdminVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
