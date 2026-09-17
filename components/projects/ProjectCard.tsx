import React from 'react';
import { TechnicalProject } from '@/types/portfolio';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface ProjectCardProps {
  project: TechnicalProject;
  onOpenModal: (project: TechnicalProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const accentBadge =
    project.accentColor === 'purple'
      ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
      : project.accentColor === 'emerald'
      ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      : 'border-blue-500/30 text-blue-400 bg-blue-500/10';

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
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20"
          >
            {project.category}
          </span>
          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0b2545] border border-slate-200 group-hover:border-[#0b2545] flex items-center justify-center text-slate-600 group-hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0b2545] transition-colors font-sans mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-slate-500 text-xs sm:text-sm font-sans mb-4 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Summary */}
        <p className="text-slate-700 text-sm leading-relaxed font-sans mb-6 line-clamp-3">
          {project.summary}
        </p>

        {/* Key Metrics Preview */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
          {project.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="text-left">
              <span className="block font-mono font-bold text-sm sm:text-base text-emerald-700">
                {metric.value}
              </span>
              <span className="block text-[11px] text-slate-600 font-sans truncate font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
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

        {/* Visual action prompt */}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0b2545] group-hover:text-blue-900 transition-colors py-1 select-none pointer-events-none"
        >
          <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Ver arquitectura y métricas</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
