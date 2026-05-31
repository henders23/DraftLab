import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bot, Users, Calendar, ArrowRight, PenLine } from 'lucide-react';

const FEATURES = [
  {
    icon: <Bot size={28} />,
    title: 'AI Writing Feedback',
    description: 'Paste any excerpt and receive instant analysis of clarity, academic tone, argument structure, and grammar — calibrated for doctoral writing.',
  },
  {
    icon: <Users size={28} />,
    title: 'Peer Review Exchange',
    description: 'A credits-based system connecting PhD students across disciplines. Review others’ work to earn credits; spend credits to get yours reviewed.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Learning Zone',
    description: 'A structured curriculum for doctoral writers — 14 topics, from academic voice to writing for publication. Annotated extracts from real doctoral writing across disciplines.',
  },
  {
    icon: <Calendar size={28} />,
    title: 'Writing Sessions',
    description: 'Join live Pomodoro co-writing rooms and workshops led by experienced academic writers. Scheduled events every day of the week.',
  },
];

export default function LandingView() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Nav */}
      <nav className="border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenLine size={20} className="text-white" />
            <span className="font-semibold text-lg tracking-tight">Scholarly Voice</span>
          </div>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
          >
            Join the Community <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          The academic writing workspace for PhD students
        </p>
        <h1 className="text-5xl sm:text-6xl font-light leading-tight mb-6 tracking-tight">
          Write with clarity.<br />
          <span className="text-zinc-400">Argue with confidence.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Scholarly Voice brings together AI feedback, peer review, structured learning, and a community of doctoral writers — everything you need to develop a voice that earns the doctorate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
          >
            Join the Community <ArrowRight size={15} />
          </Link>
          <Link
            to="/learning"
            className="flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-white text-sm font-medium rounded-full hover:bg-zinc-900 transition-colors"
          >
            <BookOpen size={15} /> Explore the curriculum
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-12 text-center">
          Everything in one workspace
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-5 text-white">
                {f.icon}
              </div>
              <h3 className="text-base font-medium text-white mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Stats row */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-light text-white mb-1">14</p>
            <p className="text-sm text-zinc-500">Learning topics</p>
          </div>
          <div>
            <p className="text-4xl font-light text-white mb-1">50+</p>
            <p className="text-sm text-zinc-500">Annotated extracts</p>
          </div>
          <div>
            <p className="text-4xl font-light text-white mb-1">Live</p>
            <p className="text-sm text-zinc-500">Writing sessions daily</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-light text-white mb-4">
          Ready to find your scholarly voice?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Join thousands of PhD students who are writing more clearly, arguing more precisely, and submitting with confidence.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
        >
          Join the Community <ArrowRight size={15} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <PenLine size={14} />
            <span>Scholarly Voice</span>
          </div>
          <p>The academic writing workspace for doctoral researchers.</p>
        </div>
      </footer>

    </div>
  );
}
