import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Registration from './Pages/Login/Registration/Registration';
import Login from './Pages/Login/Login/Login';
import Profile from './Pages/Profile/Profile';
import Scoreboard from './Pages/Scoreboard/Scoreboard';
import Settings from './Pages/Settings/Settings';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

// import AuthProvider from './contexts/AuthProvider/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={< About />} />
          <Route path="/projects" element={< Projects />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
