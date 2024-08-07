import {
  Routes,
  Route,
} from "react-router-dom";
import EmailInput from "./components/login/Email.jsx";
import Otp from './components/login/Otp.jsx';
import Name from './components/login/Name.jsx';
import Dashboard from './components/login/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<EmailInput />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/name" element={<Name />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}