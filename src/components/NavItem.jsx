import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      end={to === '/dashboard'}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-white/10 text-white border border-white/20'
            : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200 border border-transparent'
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
