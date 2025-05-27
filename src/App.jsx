import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import EducationTimeline from './components/EducationTimeline';
import ProjectTimeline from './components/ProjectTimeline';
import Achievements from './components/Achievements';
import ResumeNew from './components/ResumeNew';
import Work from './pages/Work';
import Contact from './pages/Contact';
import HireMe from './pages/HireMe';


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-['Poppins'] overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
          
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          
          .font-fira {
            font-family: 'Fira Code', monospace;
          }

          /* Custom scrollbar for the gradient background */
          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: #1a1a1a;
          }

          ::-webkit-scrollbar-thumb {
            background: #87CEEB;
            border-radius: 3px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #6CB2D1;
          }

          /* Container styles */
          .container {
            width: 100%;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (min-width: 640px) {
            .container {
              padding: 0 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .container {
              padding: 0 2rem;
            }
          }

          /* Global overflow control */
          html, body {
            overflow-x: hidden;
            position: relative;
            width: 100%;
          }
        `}
      </style>
      
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col">
              <Hero />
              <Stats />
              <Services />
              <TechnicalSkills />
              <EducationTimeline />
              <Certifications />
              <ProjectTimeline />
              <Experience />
              <Achievements />
              <Contact />
            </div>
          } />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;