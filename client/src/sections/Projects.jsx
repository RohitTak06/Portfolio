import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projectsData';
import {
  Github,
  ExternalLink,
  Layers,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Trophy,
  LineChart,
  ShieldCheck,
  PlaySquare,
  Image as ImageIcon,
} from 'lucide-react';
import { IconSpaceLightning, IconSpaceLaptop } from '../components/AnimatedIcon';

const iconTypeMap = {
  trophy: Trophy,
  chart: LineChart,
  shield: ShieldCheck,
  play: PlaySquare,
  image: ImageIcon,
};

export const Projects = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 border border-primary/20">
            <IconSpaceLaptop size={16} />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Real GitHub <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Shortlisted, verified repositories with real architectural code, normalized databases, and machine learning pipelines.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'glass hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{category}</span>
                <span className="ml-1.5 opacity-70 font-mono text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const ProjectIcon = iconTypeMap[project.iconType] || Layers;

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-border flex flex-col justify-between overflow-hidden group hover:border-primary/40 transition-all duration-300"
              >
                <div>
                  {/* Top Header Strip with Category & Banner */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary text-foreground border border-border">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-6 pb-4 space-y-4">
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Problem Solved Badge */}
                    <div className="p-3 rounded-xl bg-secondary/50 border border-border text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground block mb-0.5">
                        Problem Solved:
                      </span>
                      <p className="line-clamp-2 text-[11px]">{project.problemSolved}</p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-muted text-foreground/80 border border-border/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-muted-foreground">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 border-t border-border/80 bg-muted/20 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white text-foreground transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary text-white hover:opacity-90 transition-all"
                        aria-label={`Live Demo of ${project.title}`}
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground cursor-help"
                        title={project.demoStatus}
                      >
                        <ShieldAlert className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-border text-center max-w-2xl mx-auto space-y-3">
          <h4 className="font-heading font-bold text-lg text-foreground">
            Explore All 8 Public Repositories
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Check out commits, branches, and active development directly on Rohit Tak's verified GitHub account.
          </p>
          <a
            href="https://github.com/RohitTak06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-foreground text-background hover:opacity-90 transition-all text-xs sm:text-sm"
          >
            <Github className="w-4 h-4" />
            <span>Visit github.com/RohitTak06</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
