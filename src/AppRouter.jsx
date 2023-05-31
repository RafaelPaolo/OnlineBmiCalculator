import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoreInfoPage from './pages/MoreInfoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './AppRouter.css';

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <ul>
            <li>
              <NavLink exact to="/about" activeclassname="active">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/bmi-calculator" activeclassname="active">Calculator</NavLink>
            </li>
            <li>
              <NavLink exact to="/more-info" activeclassname="active">More Info</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/bmi-calculator" element={<HomePage />} />
            <Route path="/more-info" element={<MoreInfoPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
