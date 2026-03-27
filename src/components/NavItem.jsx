import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white border border-transparent'
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
