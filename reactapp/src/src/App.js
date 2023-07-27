import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './Components/Formu';
import RegisterForm from './Components/Forma';
import Front from './Components/Front';
// import { Login } from '@mui/icons-material';
import LoginPage from './Components/Login';
import Home from './Components/Home';
import Pricing from './Components/pricing';
import { Forum } from '@mui/icons-material';
// import ActionAreaCard from './Components/ActionArearCard';

function App() {
    return (
        <>
                 <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Front/>} />
                    <Route exact path='/advisor' element={<RegisterForm/>}/>
                    <Route exact path='/user' element={<RegistrationForm/>}/>
                    <Route exact path='/option' element={<Home/>}/>
                    <Route exact path='/war' element={<Home/>}/>
                </Routes>
            </BrowserRouter>    
        </>
    );
}
export default App;
