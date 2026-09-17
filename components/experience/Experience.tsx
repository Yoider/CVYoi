import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experiencia"
      data-testid="experience-section"
      className="py-16 sm:py-24 border-t border-slate-200 relative bg-slate-50"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header matching Corporate PDF */}
        <div className="mb-12">
          <div className="section-banner text-center text-xl sm:text-2xl tracking-wider">
            EXPERIENCIA LABORAL
          </div>
          <p className="text-center text-slate-600 text-base sm:text-lg font-sans mt-4 max-w-2xl mx-auto">
            Evolución probada en entornos empresariales de alta exigencia, microservicios distribuidos y proyectos pioneros de IA.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  item.isCurrent
                    ? 'bg-emerald-500 border-emerald-600 ring-4 ring-emerald-500/20 animate-pulse'
                    : 'bg-white border-[#0b2545] group-hover:bg-[#0b2545]'
                }`}
                aria-hidden="true"
              />

              {/* Experience Card */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                      {item.role}
                    </h3>
                    <div className="text-base font-bold text-[#0b2545] mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-600">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                      <span>{item.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Logros Clave
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Responsibilities list if present */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Responsabilidades
                    </h4>
                    <ul className="space-y-1.5">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-slate-600 list-disc list-inside">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Tecnologías Aplicadas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
