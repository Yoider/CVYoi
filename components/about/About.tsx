import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Layers, Bot, Zap, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-blue-400" aria-hidden="true" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" aria-hidden="true" />,
  Zap: <Zap className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
};

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section
      id="sobre-mi"
      data-testid="about-section"
      className="py-16 sm:py-24 border-t border-slate-200 relative bg-slate-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header matching Corporate PDF */}
        <div className="mb-12">
          <div className="section-banner text-center text-xl sm:text-2xl tracking-wider">
            SOBRE MI
          </div>
          <p className="text-center text-slate-600 text-base sm:text-lg font-sans mt-4 max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>

        {/* 3-Act Narrative Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {about.paragraphs.map((paragraph, index) => {
            const sectionTitles = [
              'Backend .NET & Clean Architecture',
              'Full-Stack Vue.js & Next.js',
              'IA Multimodal & Automatización en Sevilla',
            ];

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20 mb-4"
                  >
                    {sectionTitles[index]}
                  </span>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                    {paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Career Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-sans">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Engineering Principles */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center font-sans">
            Principios de Ingeniería
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-7 flex flex-col items-start shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-[#0b2545]/10 border border-[#0b2545]/20 mb-4">
                  {iconMap[principle.icon] || <Layers className="w-5 h-5 text-[#0b2545]" />}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                  {principle.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
