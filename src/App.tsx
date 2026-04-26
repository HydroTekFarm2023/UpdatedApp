import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Control from './pages/Control';
import Camera from './pages/Camera';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login page doesn't use the common Layout */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes wrapped in Layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/control"
          element={
            <Layout>
              <Control />
            </Layout>
          }
        />
        <Route
          path="/camera"
          element={
            <Layout>
              <Camera />
            </Layout>
          }
        />

        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
