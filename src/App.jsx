import './App.css';
import logo from './assets/Logo.jpg'; // Corrected path
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Tasks from './components/Tasks';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
