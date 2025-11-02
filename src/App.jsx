import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import ErrorPage from './pages/ErrorPage';
import MyInstallation from './pages/MyInstallation';
import LoadingSpinner from './components/LoadingSpinner';


const RouterWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 

    return () => {
      setLoading(true); 
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? <LoadingSpinner /> : children}
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouterWrapper><Home /></RouterWrapper>} />
        <Route path="/apps" element={<RouterWrapper><AllApps /></RouterWrapper>} />
        <Route path="/app/:id" element={<RouterWrapper><AppDetails /></RouterWrapper>} />
        <Route path="/my-installation" element={<RouterWrapper><MyInstallation /></RouterWrapper>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;