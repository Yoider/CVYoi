'use client';

import React, { useEffect, useRef } from 'react';
import { TechnicalProject } from '@/types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: TechnicalProject | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  // Keep onClose callback reference up to date
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // WCAG Accessible Dialog: Focus Trap, Initial Focus, Escape listener, Scroll Lock & Return Focus
  useEffect(() => {
    if (!project) return;

    // 1. Store previously focused active element before opening modal
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      previouslyFocusedElementRef.current = document.activeElement;
    }

    // 2. Initial focus: set focus to close button (X) on open
    const focusTimer = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    // 3. Lock body scroll
    document.body.classList.add('overflow-hidden');
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 4. Keyboard handler for Escape and Tab focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalContentRef.current) return;

        const focusableElements = Array.from(
          modalContentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => {
          return (
            !el.hasAttribute('disabled') &&
            el.getAttribute('aria-hidden') !== 'true' &&
            el.offsetParent !== null
          );
        });

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const currentActive = document.activeElement;

        if (e.shiftKey) {
          // Shift + Tab: backward wrap from first to last
          if (currentActive === firstElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: forward wrap from last to first
          if (currentActive === lastElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // 5. Cleanup on modal close or unmount
    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);

      // Restore body scroll
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;

      // Restore focus to the previously focused element
      const triggerElement = previouslyFocusedElementRef.current;
      if (triggerElement && document.contains(triggerElement) && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const accentBorder =
    project.accentColor === 'purple'
      ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
      : project.accentColor === 'emerald'
      ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      : 'border-blue-500/30 text-blue-400 bg-blue-500/10';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      data-testid="project-modal"
      className="project-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/70 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        // Close if click is on the backdrop itself
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalContentRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 my-auto text-left max-h-[90vh] overflow-y-auto animate-scale-up outline-none focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button X with Ref for Initial Focus */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          data-testid="modal-close-button"
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-[#0b2545] focus:outline-none"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Header: Category, Title, Tagline */}
        <div className="pr-12 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20"
            >
              {project.category}
            </span>
          </div>

          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight mb-2"
          >
            {project.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200">
          <div className="flex items-center gap-2 text-amber-900 font-sans font-bold text-sm sm:text-base mb-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" aria-hidden="true" />
            <h3 className="font-bold">Problema / Desafío de Negocio</h3>
          </div>
          <p className="text-amber-950 text-sm sm:text-base leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[#0b2545] font-sans font-bold text-base sm:text-lg mb-3">
            <Cpu className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h3 className="font-bold">Arquitectura de Solución</h3>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans mb-4">
            {project.solutionArchitecture.overview}
          </p>
          <ul className="space-y-2.5">
            {project.solutionArchitecture.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b2545] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-800 font-sans font-bold text-base sm:text-lg mb-3">
            <BarChart3 className="w-5 h-5 shrink-0 text-emerald-600" aria-hidden="true" />
            <h3 className="font-bold">Métricas Clave de Impacto</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-700 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mb-1">
                  {metric.label}
                </div>
                {metric.detail && (
                  <div className="text-xs text-slate-600 font-sans">
                    {metric.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stack breakdown */}
        <div className="mb-8">
          <h3 className="text-sm font-bold font-mono text-slate-700 uppercase tracking-wider mb-3">
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions / Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${project.title} en GitHub`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors min-h-[44px] focus:ring-2 focus:ring-[#0b2545] focus:outline-none"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Repositorio GitHub</span>
              </a>
            )}
            {project.links.liveUrl && project.links.liveUrl !== '#' && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo en vivo de ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#0b2545] hover:bg-[#061a30] text-white shadow-sm transition-colors min-h-[44px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Demo en Vivo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles del proyecto"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors min-h-[44px] focus:ring-2 focus:ring-[#0b2545] focus:outline-none"
          >
            Cerrar Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
