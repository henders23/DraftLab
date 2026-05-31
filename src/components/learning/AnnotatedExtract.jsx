import React, { useState, useEffect, useRef } from 'react';

const HIGHLIGHT = {
  bg: 'bg-white/20',
  ring: 'ring-1 ring-white/70',
  dot: 'bg-white',
  label: 'text-white',
  panel: 'border-white/20 bg-white/5',
};

export default function AnnotatedExtract({ extract, variant }) {
  const [activeId, setActiveId] = useState(null);
  const panelRef = useRef(null);

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

  return (
    <div className="bg-black/50 border border-zinc-800 rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/60 gap-4">
        <div className="flex items-center gap-2 min-w-0">
          {variant === 'weak' && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 shrink-0">
              Weaker example
            </span>
          )}
          {variant === 'strong' && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 shrink-0">
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
              const isActive = activeId === seg.a;
              return (
                <mark
                  key={i}
                  onClick={() => toggle(seg.a)}
                  className={`bg-transparent cursor-pointer rounded px-0.5 transition-all ${HIGHLIGHT.bg} ${isActive ? HIGHLIGHT.ring : ''}`}
                >
                  {seg.t}
                </mark>
              );
            })}
          </p>

          {/* Legend */}
          {annotationEntries.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800/60">
              {annotationEntries.map(([id, ann]) => (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full transition-colors border ${
                    activeId === id
                      ? `${HIGHLIGHT.panel} ${HIGHLIGHT.label} border-white/30`
                      : 'text-zinc-500 bg-zinc-800/50 border-zinc-700/50 hover:text-zinc-300'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${HIGHLIGHT.dot}`} />
                  {ann.label}
                </button>
              ))}
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
            <div className={`border rounded-xl p-4 ${HIGHLIGHT.panel}`}>
              <p className={`text-xs font-semibold mb-2 ${HIGHLIGHT.label}`}>
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
