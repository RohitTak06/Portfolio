import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { useTheme } from './hooks/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isResumeModalOpen={isResumeModalOpen}
                  setIsResumeModalOpen={setIsResumeModalOpen}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
