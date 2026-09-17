import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { StatusBadge } from './StatusBadge';
import { FileDown, Github, Linkedin, ArrowRight, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      aria-label="Presentación principal"
    >
      {/* Background glow effects matching design tokens */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="mb-6 animate-fade-in">
            <StatusBadge text={hero.availabilityBadge.text} />
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-sans mb-3 max-w-4xl">
            {hero.name}
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2545] mb-6 font-sans tracking-tight">
            {hero.title}
          </p>

          {/* Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-4 font-sans font-normal">
            {hero.valueProposition}
          </p>

          {/* Tagline */}
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mb-10 font-sans">
            {hero.tagline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            {/* Download CV */}
            <a
              href={hero.cvDownloadUrl}
              download="cv-yoider-murillo.pdf"
              aria-label="Descargar Curriculum Vitae en formato PDF"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0b2545] hover:bg-[#061a30] text-white shadow-md shadow-navy-dark/20 transition-all duration-200 min-h-[44px] min-w-[44px] active:scale-95"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              <span>Descargar CV (PDF)</span>
            </a>

            {/* Quick CTA to Proyectos */}
            <a
              href="#proyectos"
              aria-label="Ver proyectos técnicos destacados"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all duration-200 min-h-[44px] min-w-[44px] active:scale-95"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
            </a>

            {/* Quick CTA to Contacto */}
            <a
              href="#contacto"
              aria-label="Ir a la sección de contacto directo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all duration-200 min-h-[44px] min-w-[44px] active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-500" aria-hidden="true" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Social Links & Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-200 w-full max-w-xl text-slate-600">
            <a
              href="https://github.com/yoi-hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub de Yoider Murillo"
              className="inline-flex items-center gap-2 text-sm hover:text-slate-900 transition-colors duration-200 min-h-[44px] px-2"
            >
              <Github className="w-5 h-5 text-slate-600" aria-hidden="true" />
              <span className="font-mono text-xs">github.com/yoi-hub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yoider-murillo-salazar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn de Yoider Murillo"
              className="inline-flex items-center gap-2 text-sm hover:text-slate-900 transition-colors duration-200 min-h-[44px] px-2"
            >
              <Linkedin className="w-5 h-5 text-[#0b2545]" aria-hidden="true" />
              <span className="font-mono text-xs">linkedin.com/in/yoider-murillo-salazar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
