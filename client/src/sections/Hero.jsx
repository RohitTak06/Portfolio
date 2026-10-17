import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink, Download, Sparkles, Terminal } from 'lucide-react';
import {
  IconSpaceLightning,
  IconSpaceGlobe,
  IconSpaceLaptop,
  IconSpaceCat,
} from '../components/AnimatedIcon';

const roles = [
  'Full-Stack MERN Developer',
  'AI/ML & FinTech Enthusiast',
  'Next.js & TypeScript Engineer',
  'Computer Science Student @ JKLU',
];

export const Hero = ({ onOpenResumeModal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Pause at full word
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextChar = isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambience & Glowing Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 dark:bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs font-medium text-foreground mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5" />
          <span>Available for Internships & Full-Stack Projects</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary font-semibold">JKLU Jaipur</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="gradient-text">Rohit Tak</span>.
        </h1>

        {/* Rotating Dynamic Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 font-mono text-lg sm:text-2xl md:text-3xl font-semibold text-foreground/90">
            <Terminal className="w-5 h-5 text-primary shrink-0" />
            <span>{displayedText}</span>
            <span className="inline-block w-2.5 h-6 bg-primary animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Concise Statement */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
          Undergraduate engineering student at{' '}
          <span className="text-foreground font-semibold">JK Lakshmipat University</span> passionate
          about crafting scalable web architectures, financial quantitative analytics, and learning through real-world software.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <IconSpaceLightning size={18} />
            <span>Explore Projects</span>
          </a>

          <button
            type="button"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass border border-border hover:bg-secondary/80 text-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Badges and Verified Profiles */}
        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/RohitTak06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
            aria-label="Rohit Tak's GitHub Profile"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium font-mono">github/RohitTak06</span>
          </a>

          <span className="text-border">•</span>

          <a
            href="https://www.linkedin.com/in/rohit-tak-7150762b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
            aria-label="Rohit Tak's LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform text-blue-500" />
            <span className="text-xs font-medium font-mono">linkedin/rohit-tak</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all animate-bounce"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
