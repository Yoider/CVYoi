import React from 'react';

interface StatusBadgeProps {
  text?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  text = 'DISPONIBLE EN SEVILLA & REMOTO',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-sm select-none ${className}`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
      <span>{text}</span>
    </div>
  );
};

export default StatusBadge;
