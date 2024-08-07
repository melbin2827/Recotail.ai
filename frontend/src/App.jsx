import {
  Routes,
  Route,
} from "react-router-dom";
import EmailInput from "./components/login/Email.jsx";
import Otp from './components/login/Otp.jsx';
import Name from './components/login/Name.jsx';
import Dashboard from './components/login/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AmazonCallback from './components/AmazonCallback.jsx'; // Import the new component

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailInput />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/name" element={<Name />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/seller_central/callback" element={<AmazonCallback />} /> {/* New Route */}
    </Routes>
  );
}
