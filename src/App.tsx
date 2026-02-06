import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProjectsManagement from './pages/admin/ProjectsManagement';
import SkillsManagement from './pages/admin/SkillsManagement';
import AboutManagement from './pages/admin/AboutManagement';
import ContactsManagement from './pages/admin/ContactsManagement';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Route */}
        <Route path="/" element={
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>
        } />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ProjectsManagement />} />
          <Route path="skills" element={<SkillsManagement />} />
          <Route path="about" element={<AboutManagement />} />
          <Route path="contacts" element={<ContactsManagement />} />
        </Route>
        
        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;