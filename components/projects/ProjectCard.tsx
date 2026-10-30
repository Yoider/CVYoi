import React from 'react';
import { TechnicalProject } from '@/types/portfolio';
import { ArrowUpRight, Cpu, ExternalLink, Github, CheckCircle2, Users } from 'lucide-react';

interface ProjectCardProps {
  project: TechnicalProject;
  onOpenModal: (project: TechnicalProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      data-testid="project-card"
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      aria-label={`Ver arquitectura y métricas de ${project.title}`}
      className="group relative flex flex-col justify-between bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0b2545] text-left"
    >
      <div>
        {/* Category & GitHub Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20">
            {project.category}
          </span>

          {project.githubMetadata && (
            <a
              href={project.githubMetadata.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Repositorio ${project.githubMetadata.repoName} en GitHub`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
              <span>{project.githubMetadata.repoName}</span>
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0b2545] transition-colors font-sans mb-1.5 tracking-tight">
          {project.title}
        </h3>

        {/* Client Type */}
        {project.clientType && (
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans mb-3">
            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-slate-800">Tipo de cliente:</span>
            <span>{project.clientType}</span>
          </div>
        )}

        {/* Summary */}
        <p className="text-slate-700 text-sm leading-relaxed font-sans mb-4">
          {project.summary}
        </p>

        {/* Solved Functions Box */}
        {project.solvedFunctions && project.solvedFunctions.length > 0 && (
          <div className="mb-5 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono font-bold text-[#0b2545] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Funciones que Resuelve</span>
            </div>
            <ul className="space-y-1.5">
              {project.solvedFunctions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b2545]/60 mt-1.5 shrink-0" aria-hidden="true" />
                  <span className="leading-snug">{fn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200"
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Visual action prompt & Direct links */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b2545] group-hover:text-blue-900 transition-colors py-1 select-none pointer-events-none"
          >
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Ver arquitectura y métricas</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
          </span>

          <div className="flex items-center gap-2">
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver código de ${project.title} en GitHub`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-colors"
              >
                <Github className="w-3 h-3 text-slate-700" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}

            {project.links.liveUrl && project.links.liveUrl !== '#' && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver sitio web en vivo de ${project.title}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xs transition-colors"
              >
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                <span>Ver Web</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
