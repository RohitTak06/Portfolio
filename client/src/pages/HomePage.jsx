import React, { useState } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';
import ProjectModal from '../components/ProjectModal';
import ResumeDownloadModal from '../components/ResumeDownloadModal';

export const HomePage = ({ isResumeModalOpen, setIsResumeModalOpen }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main>
      <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      <About />
      <Skills />
      <Projects onSelectProject={(project) => setSelectedProject(project)} />
      <Experience />
      <Achievements />
      <Contact />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Download Modal */}
      <ResumeDownloadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
};

export default HomePage;
