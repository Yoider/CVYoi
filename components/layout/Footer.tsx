'use client';

import React from 'react';
import { ArrowUp, Code2, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-[#061a30] border-t border-[#0b2545] pt-12 pb-16 text-slate-300 font-sans"
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand & Stack info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-white font-bold text-base tracking-tight font-sans">
                Yoider Murillo Salazar
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Software Engineer & Full Stack Developer. Arquitecturas robustas, interfaces reactivas e Inteligencia Artificial Multimodal.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Yoider Murillo"
              className="p-2.5 rounded-lg text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/yoider-murillo-salazar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Yoider Murillo"
              className="p-2.5 rounded-lg text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba de la página"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors min-h-[44px]"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            <p>© 2026 Yoider Murillo Salazar. Todos los derechos reservados.</p>
            <p className="mt-1 text-slate-400">
              Construido con Next.js, TypeScript y Tailwind CSS bajo la identidad del Currículum Corporativo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="text-slate-300">Sevilla, Andalucía, España</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
