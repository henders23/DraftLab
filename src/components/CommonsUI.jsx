import React from 'react';

const ICONS = {
  search:   'M11 11 L15 15 M7.5 12.5 a5 5 0 1 1 0-10 a5 5 0 0 1 0 10',
  calendar: 'M4 5 h12 v11 H4 z M4 8 h12 M7 3 v3 M13 3 v3',
  write:    'M4 16 l0.6-3 L12 5.6 a1.4 1.4 0 0 1 2 2 L6.6 15 z M11 7 l2 2',
  users:    'M7 9 a2.4 2.4 0 1 0 0-4.8 a2.4 2.4 0 0 0 0 4.8 M2.5 16 c0-2.8 2-4.2 4.5-4.2 s4.5 1.4 4.5 4.2 M13 5 a2 2 0 0 1 0 4 M14 11.4 c2 0.3 3.3 1.6 3.3 4',
  chat:     'M3 5 h14 v9 H8 l-3 3 v-3 H3 z',
  heart:    'M10 16 C2 10.5 4 4.5 7.7 5 C9 5.2 10 6.2 10 6.2 S11 5.2 12.3 5 C16 4.5 18 10.5 10 16Z',
  arrow:    'M4 10 h11 M11 6 l4 4 -4 4',
  plus:     'M10 4 v12 M4 10 h12',
  clock:    'M10 4 a6 6 0 1 1 0 12 a6 6 0 0 1 0-12 M10 6.5 V10 l2.4 1.5',
  spark:    'M10 3 c0.6 3.6 1.4 4.4 5 5 c-3.6 0.6 -4.4 1.4 -5 5 c-0.6 -3.6 -1.4 -4.4 -5 -5 c3.6 -0.6 4.4 -1.4 5 -5Z',
  check:    'M4 10.5 l4 4 L16 5',
  bell:     'M6 9 a4 4 0 0 1 8 0 c0 4 1.5 5 1.5 5 H4.5 S6 13 6 9 M8.5 16.5 a1.8 1.8 0 0 0 3 0',
  pin:      'M10 17 C6 12 5 10 5 8 a5 5 0 0 1 10 0 c0 2 -1 4 -5 9 M10 6 a2 2 0 1 0 0 4 a2 2 0 0 0 0-4',
  globe:    'M10 4 a6 6 0 1 1 0 12 a6 6 0 0 1 0-12 M4 10 h12 M10 4 c2.5 2.6 2.5 9.4 0 12 M10 4 c-2.5 2.6 -2.5 9.4 0 12',
};

export function Icon({ name, sm, style }) {
  return (
    <svg viewBox="0 0 20 20" className={`ic${sm ? ' ic-sm' : ''}`} style={style} aria-hidden="true">
      <path d={ICONS[name] || ICONS.spark} />
    </svg>
  );
}

const AV_VARIANTS = ['', 'v2', 'v3', 'v4', 'v5'];

export function Avatar({ initials = '', size = 36, variant = 0, style = {} }) {
  const v = AV_VARIANTS[variant % AV_VARIANTS.length];
  return (
    <span className={`avatar ${v}`} style={{ width: size, height: size, fontSize: size * 0.4, ...style }}>
      {initials}
    </span>
  );
}

export function AvatarStack({ people = [], size = 30, max = 4, extra }) {
  const shown = people.slice(0, max);
  return (
    <span className="avatar-stack">
      {shown.map((p, i) => <Avatar key={i} initials={p.i} variant={p.v ?? i} size={size} />)}
      {extra != null && (
        <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.33, background: 'var(--surface)', color: 'var(--ink-soft)', fontFamily: 'var(--sans)', fontWeight: 600, marginLeft: -10 }}>
          {extra}
        </span>
      )}
    </span>
  );
}

export function Btn({ children, variant = 'primary', size = '', block, icon, iconR, onClick, style = {}, disabled }) {
  const cls = ['btn', `btn-${variant}`, size ? `btn-${size}` : '', block ? 'btn-block' : ''].filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick} style={style} disabled={disabled}>
      {icon && <Icon name={icon} sm />}
      {children}
      {iconR && <Icon name={iconR} sm />}
    </button>
  );
}

export function Tag({ children, variant = '', style = {} }) {
  return <span className={`tag${variant ? ' ' + variant : ''}`} style={style}>{children}</span>;
}

export function Chip({ children, on, onClick }) {
  return <button className={`chip${on ? ' on' : ''}`} onClick={onClick}>{children}</button>;
}

export function Wordmark({ name = 'PGR Commons', onDark, onClick }) {
  const mark = name.replace(/^PGR\s+/i, '').charAt(0).toUpperCase() || 'C';
  return (
    <a className={`wordmark${onDark ? ' on-dark' : ''}`} onClick={onClick}>
      <span className="mark">{mark}</span>
      <span className="name">{name}<small>postgraduate researchers</small></span>
    </a>
  );
}

export function DateBox({ mon, day }) {
  return (
    <div className="datebox">
      <div className="mon">{mon}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export function Cover({ label = 'event photo', height = 150, radius = 0, style = {} }) {
  return (
    <div className="media" style={{ height, borderRadius: radius, width: '100%', ...style }}>
      <span className="media-label">{label}</span>
    </div>
  );
}

export function SrcChip({ src }) {
  return (
    <span className={`srcchip ${src}`}>
      <span className="dot" />{src === 'circle' ? 'Your circle' : 'Discipline'}
    </span>
  );
}
