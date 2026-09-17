'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { TechnicalProject } from '@/types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<TechnicalProject | null>(null);

  const handleOpenModal = (project: TechnicalProject) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="proyectos"
      data-testid="projects-section"
      className="py-16 sm:py-24 border-t border-slate-200 relative bg-slate-50"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header matching Corporate PDF */}
        <div className="mb-12">
          <div className="section-banner text-center text-xl sm:text-2xl tracking-wider">
            PROYECTOS TÉCNICOS DESTACADOS
          </div>
          <p className="text-center text-slate-600 text-base sm:text-lg font-sans mt-4 max-w-2xl mx-auto">
            Sistemas en producción y arquitecturas de ingeniería diseñadas para resolver problemas de alta complejidad técnica y de negocio.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on desktop */}
        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* Interactive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Projects;
