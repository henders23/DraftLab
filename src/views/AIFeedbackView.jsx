import React, { useState } from 'react';
import { Bot, Zap, CheckCircle, AlertCircle, BookOpen, Pencil } from 'lucide-react';

const MOCK_FEEDBACK = [
  {
    id: 'clarity',
    label: 'Clarity',
    icon: <Zap size={14} />,
    score: 72,
    suggestions: [
      'Sentence in paragraph 2 exceeds 40 words — consider splitting.',
      'Pronoun "it" on line 3 has an ambiguous referent; specify the noun.',
      'Replace "utilize" with "use" for clearer academic prose.',
    ],
  },
  {
    id: 'structure',
    label: 'Structure',
    icon: <BookOpen size={14} />,
    score: 85,
    suggestions: [
      'Opening sentence effectively signals the paragraph topic.',
      'Consider adding a transitional sentence before the final claim.',
    ],
  },
  {
    id: 'tone',
    label: 'Academic Tone',
    icon: <CheckCircle size={14} />,
    score: 90,
    suggestions: [
      'Tone is consistently formal and appropriate.',
      'Good use of hedging language ("suggests", "may indicate").',
    ],
  },
  {
    id: 'grammar',
    label: 'Grammar',
    icon: <AlertCircle size={14} />,
    score: 61,
    suggestions: [
      'Subject-verb agreement issue detected in paragraph 1.',
      'Missing Oxford comma in list on line 5.',
      '"Data" is plural — use "data are" rather than "data is".',
    ],
  },
];

function ScoreBadge({ score }) {
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-zinc-300 bg-zinc-800">
      {score}/100
    </span>
  );
}

export default function AIFeedbackView() {
  const [text, setText] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleGetFeedback() {
    if (!text.trim()) return;
    setLoading(true);
    setShowFeedback(false);
    setTimeout(() => {
      setLoading(false);
      setShowFeedback(true);
    }, 1200);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div>
        <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
          <Bot size={28} /> AI Feedback Engine
        </h2>
        <p className="text-zinc-400">Paste a writing excerpt and get instant, detailed feedback.</p>
      </div>

      {/* Input card */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
          <Pencil size={14} /> Your writing excerpt
        </label>
        <textarea
          value={text}
          onChange={(e) => { setText(e.target.value); setShowFeedback(false); }}
          rows={8}
          placeholder="Paste your paragraph or section here…"
          className="w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-600 transition-colors"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-600">{text.trim().split(/\s+/).filter(Boolean).length} words</span>
          <button
            onClick={handleGetFeedback}
            disabled={!text.trim() || loading}
            className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed text-black text-sm font-semibold rounded-xl transition-colors"
          >
            {loading ? (
              <>
                <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full" />
                Analysing…
              </>
            ) : (
              <><Bot size={14} /> Get Feedback</>
            )}
          </button>
        </div>
      </section>

      {/* Feedback panels */}
      {showFeedback && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Feedback results</h3>
          {MOCK_FEEDBACK.map((section) => (
            <section
              key={section.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  {section.icon} {section.label}
                </span>
                <ScoreBadge score={section.score} />
              </div>
              <ul className="space-y-2">
                {section.suggestions.map((s, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex gap-2">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-zinc-600 inline-block" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
