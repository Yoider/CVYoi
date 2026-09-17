'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  ariaLabel?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copiar',
  copiedLabel = '¡Copiado!',
  ariaLabel = 'Copiar al portapapeles',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older contexts
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : ariaLabel}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200 min-h-[44px] min-w-[44px] select-none ${
        copied
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-700 shrink-0 animate-scale-up" aria-hidden="true" />
          <span className="font-bold text-emerald-800">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
