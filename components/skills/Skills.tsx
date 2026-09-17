import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Server, Layout, Database, Bot, Terminal, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-blue-400" aria-hidden="true" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" aria-hidden="true" />,
  Database: <Database className="w-5 h-5 text-blue-400" aria-hidden="true" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" aria-hidden="true" />,
  Terminal: <Terminal className="w-5 h-5 text-blue-400" aria-hidden="true" />,
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="habilidades"
      data-testid="skills-section"
      className="py-16 sm:py-24 border-t border-slate-200 relative bg-slate-50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header matching Corporate PDF */}
        <div className="mb-12">
          <div className="section-banner text-center text-xl sm:text-2xl tracking-wider">
            TECNOLOGÍAS & STACK
          </div>
          <p className="text-center text-slate-600 text-base sm:text-lg font-sans mt-4 max-w-2xl mx-auto">
            Organización por capas arquitectónicas: desde fundamentos backend hasta integración de IA Multimodal.
          </p>
        </div>

        {/* 5 Layered Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#0b2545]/10 border border-[#0b2545]/20">
                      {iconMap[category.icon] || <Server className="w-5 h-5 text-[#0b2545]" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-sans">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-sans mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, idx) => {
                      const isHigh = skill.highlight || skill.isHighlighted;
                      let badgeStyle =
                        'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200 font-medium';

                      if (isHigh) {
                        badgeStyle =
                          'bg-[#0b2545] text-white border-[#0b2545] font-bold shadow-xs';
                      }

                      return (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${badgeStyle}`}
                        >
                          {isHigh && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Layer footer note */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} tecnologías</span>
                  <span className="capitalize font-semibold text-[#0b2545]">{category.accentColor} Core</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
