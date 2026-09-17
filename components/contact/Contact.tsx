'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { CopyButton } from './CopyButton';
import { Mail, Phone, MessageSquare, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="py-16 sm:py-24 border-t border-slate-200 relative bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header matching Corporate PDF */}
        <div className="mb-12">
          <div className="section-banner text-center text-xl sm:text-2xl tracking-wider">
            CONTACTO DIRECTO
          </div>
          <p className="text-center text-slate-600 text-base sm:text-lg font-sans mt-4 max-w-2xl mx-auto">
            ¿Tienes un desafío técnico, una oportunidad en Sevilla o necesitas un ingeniero para liderar soluciones de alto impacto?
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0b2545]/10 border border-[#0b2545]/20 flex items-center justify-center text-[#0b2545]">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-bold text-[#0b2545] bg-[#0b2545]/10 px-2.5 py-1 rounded-full border border-[#0b2545]/20">
                  Respuesta Rápida
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-sans mb-1">
                Correo Electrónico
              </h3>
              <p className="text-xs text-slate-500 font-sans mb-4">
                Para propuestas formales, ofertas de empleo o consultas técnicas.
              </p>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-6">
                <span className="font-mono font-semibold text-sm sm:text-base text-slate-800 break-all select-all">
                  {contact.email}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Enviar correo a ${contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#0b2545] hover:bg-[#061a30] text-white transition-colors min-h-[44px] flex-1 text-center shadow-sm"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Enviar Email</span>
              </a>
              <CopyButton
                textToCopy={contact.email}
                label="Copiar Email"
                ariaLabel="Copiar dirección de email"
              />
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Llamada / WhatsApp
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-sans mb-1">
                Teléfono & WhatsApp
              </h3>
              <p className="text-xs text-slate-500 font-sans mb-4">
                Disponible de Lunes a Viernes para llamadas o mensajes directos.
              </p>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-6">
                <span className="font-mono font-semibold text-sm sm:text-base text-slate-800 select-all">
                  {contact.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversación en WhatsApp con Yoider Murillo"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors min-h-[44px] flex-1 text-center shadow-sm"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                aria-label={`Llamar a ${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Llamar</span>
              </a>
              <CopyButton
                textToCopy={contact.phone}
                label="Copiar Teléfono"
                ariaLabel="Copiar número de teléfono"
              />
            </div>
          </div>
        </div>

        {/* Secondary Details: Location, Availability & Social Profiles */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left w-full md:w-auto">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-slate-900 font-bold text-sm sm:text-base font-sans">
                {contact.location}
              </div>
              <div className="text-xs text-slate-500 font-sans mt-0.5">
                {contact.availability}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-200">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de GitHub"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors min-h-[44px]"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" aria-hidden="true" />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-[#0b2545] hover:bg-[#061a30] transition-colors min-h-[44px]"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-white/70" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
