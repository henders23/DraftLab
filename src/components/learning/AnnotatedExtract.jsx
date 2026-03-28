import React, { useState, useEffect, useRef } from 'react';

// Full class strings — no runtime interpolation (Tailwind purge safety)
const COLOR_MAP = {
  yellow: {
    bg: 'bg-yellow-400/25',
    ring: 'ring-1 ring-yellow-400/60',
    dot: 'bg-yellow-400',
    label: 'text-yellow-400',
    panel: 'border-yellow-400/30 bg-yellow-400/5',
  },
  emerald: {
    bg: 'bg-emerald-400/25',
    ring: 'ring-1 ring-emerald-400/60',
    dot: 'bg-emerald-400',
    label: 'text-emerald-400',
    panel: 'border-emerald-400/30 bg-emerald-400/5',
  },
  blue: {
    bg: 'bg-blue-400/25',
    ring: 'ring-1 ring-blue-400/60',
    dot: 'bg-blue-400',
    label: 'text-blue-400',
    panel: 'border-blue-400/30 bg-blue-400/5',
  },
  rose: {
    bg: 'bg-rose-400/25',
    ring: 'ring-1 ring-rose-400/60',
    dot: 'bg-rose-400',
    label: 'text-rose-400',
    panel: 'border-rose-400/30 bg-rose-400/5',
  },
  violet: {
    bg: 'bg-violet-400/25',
    ring: 'ring-1 ring-violet-400/60',
    dot: 'bg-violet-400',
    label: 'text-violet-400',
    panel: 'border-violet-400/30 bg-violet-400/5',
  },
  orange: {
    bg: 'bg-orange-400/25',
    ring: 'ring-1 ring-orange-400/60',
    dot: 'bg-orange-400',
    label: 'text-orange-400',
    panel: 'border-orange-400/30 bg-orange-400/5',
  },
};

export default function AnnotatedExtract({ extract, variant }) {
  const [activeId, setActiveId] = useState(null);
  const panelRef = useRef(null);

  // Scroll panel into view on mobile when an annotation is activated
  useEffect(() => {
    if (activeId && window.innerWidth < 768) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [activeId]);

  const { discipline, source, segments, annotations } = extract;
  const annotationEntries = Object.entries(annotations ?? {});

  function toggle(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  const activeAnn = activeId ? annotations[activeId] : null;
  const activeColors = activeAnn ? COLOR_MAP[activeAnn.color] : null;

  return (
    <div className="bg-black/50 border border-zinc-800 rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/60 gap-4">
        <div className="flex items-center gap-2 min-w-0">
          {variant === 'weak' && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-400/10 text-rose-400 border border-rose-400/20 shrink-0">
              Weaker example
            </span>
          )}
          {variant === 'strong' && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 shrink-0">
              Stronger example
            </span>
          )}
          <span className="text-xs font-medium text-zinc-300 truncate">{discipline}</span>
        </div>
        <span className="text-xs text-zinc-600 shrink-0 hidden sm:block">{source}</span>
      </div>

      {/* Body: two-column on md+ */}
      <div className="grid md:grid-cols-[3fr_2fr]">

        {/* Extract text */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
          <p className="font-serif text-zinc-200 leading-8 text-[15px]">
            {(segments ?? []).map((seg, i) => {
              if (!seg.a) return <span key={i}>{seg.t}</span>;
              const ann = annotations[seg.a];
              if (!ann) return <span key={i}>{seg.t}</span>;
              const c = COLOR_MAP[ann.color];
              const isActive = activeId === seg.a;
              return (
                <mark
                  key={i}
                  onClick={() => toggle(seg.a)}
                  className={`bg-transparent cursor-pointer rounded px-0.5 transition-all ${c.bg} ${isActive ? c.ring : ''}`}
                >
                  {seg.t}
                </mark>
              );
            })}
          </p>

          {/* Legend */}
          {annotationEntries.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800/60">
              {annotationEntries.map(([id, ann]) => {
                const c = COLOR_MAP[ann.color];
                return (
                  <button
                    key={id}
                    onClick={() => toggle(id)}
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full transition-colors border ${
                      activeId === id
                        ? `${c.panel} ${c.label} border-current`
                        : 'text-zinc-500 bg-zinc-800/50 border-zinc-700/50 hover:text-zinc-300'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    {ann.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Annotation side panel */}
        <div
          ref={panelRef}
          className={`md:sticky md:top-4 md:self-start p-5 transition-all ${
            activeId ? 'block' : 'hidden md:flex md:items-center md:justify-center'
          }`}
        >
          {activeAnn ? (
            <div className={`border rounded-xl p-4 ${activeColors.panel}`}>
              <p className={`text-xs font-semibold mb-2 ${activeColors.label}`}>
                {activeAnn.label}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">{activeAnn.text}</p>
            </div>
          ) : (
            <p className="text-xs text-zinc-600 text-center leading-relaxed px-2">
              Click any highlighted phrase to read the annotation.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
