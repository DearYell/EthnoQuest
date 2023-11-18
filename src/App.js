import {BrowserRouter,Routes, Route} from 'react-router-dom'
import LoginForm from './Register'
import AdminVerification from './AdminVer'
import Login from './Login'


function App(){
   return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login />} />
                <Route path = "/Login" element = {<Login />} />
                <Route path = "/Register" element = {<LoginForm />} />
                <Route path = "/AdminVer" element = {<AdminVerification />} />
            </Routes>
        </BrowserRouter>
    </div>
   )
}
export default App;