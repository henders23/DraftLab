import React, { useState } from 'react';
import {
  BookOpen, ArrowLeft, ArrowRight, CheckCircle,
  Lock, Clock, ChevronRight, RotateCcw, Award,
} from 'lucide-react';
import { MODULES } from '../data/modules';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CATEGORIES = ['All', 'Academic Writing', 'Structure', 'Referencing', 'Presenting'];

const LEVEL_STYLES = {
  Beginner:     'bg-emerald-500/15 text-emerald-400',
  Intermediate: 'bg-yellow-400/15 text-yellow-400',
};

// ─── helpers ────────────────────────────────────────────────────────────────

function getProgress(moduleId, progress) {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return { completed: 0, total: 0, pct: 0 };
  const completed = progress[moduleId]?.completedLessons?.length ?? 0;
  const total = mod.lessons.length;
  return { completed, total, pct: total ? Math.round((completed / total) * 100) : 0 };
}

function isLessonComplete(moduleId, lessonId, progress) {
  return progress[moduleId]?.completedLessons?.includes(lessonId) ?? false;
}

function markComplete(moduleId, lessonId, progress, setProgress) {
  setProgress((prev) => {
    const existing = prev[moduleId]?.completedLessons ?? [];
    if (existing.includes(lessonId)) return prev;
    return {
      ...prev,
      [moduleId]: { completedLessons: [...existing, lessonId] },
    };
  });
}

// ─── Module List ─────────────────────────────────────────────────────────────

function ModuleCard({ module, progress, onClick }) {
  const { completed, total, pct } = getProgress(module.id, progress);
  const started = completed > 0;
  const done = pct === 100;

  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 flex flex-col gap-4 cursor-pointer transition-colors group"
    >
      <div className="flex items-start justify-between gap-2">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${LEVEL_STYLES[module.level]}`}>
          {module.level}
        </span>
        <span className="text-xs text-zinc-500">{module.estimatedMins} min</span>
      </div>

      <div>
        <p className="text-xs text-zinc-500 mb-1">{module.category}</p>
        <h3 className="text-base font-medium text-white group-hover:text-yellow-400 transition-colors">
          {module.title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{module.description}</p>
      </div>

      <div>
        <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
          <span>{total} lessons</span>
          {started && <span className={done ? 'text-emerald-400' : 'text-yellow-400'}>{pct}%</span>}
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1">
          <div
            className={`h-1 rounded-full transition-all ${done ? 'bg-emerald-400' : 'bg-yellow-400'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <button className="w-full py-2 text-xs font-medium rounded-xl transition-colors bg-zinc-800 hover:bg-zinc-700 text-white">
        {done ? 'Review' : started ? 'Continue' : 'Start module'}
      </button>
    </div>
  );
}

function ModuleList({ onSelectModule, progress }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = MODULES.filter(
    (m) => activeCategory === 'All' || m.category === activeCategory,
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1">Learning Zone</h2>
          <p className="text-zinc-400 text-sm">
            Skill modules for PhD writers — academic writing, structure, referencing, and presenting.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1 w-fit flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
              activeCategory === cat
                ? 'bg-yellow-400 text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            progress={progress}
            onClick={() => onSelectModule(mod.id)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Module Detail ────────────────────────────────────────────────────────────

function ModuleDetail({ moduleId, onBack, onSelectLesson, progress }) {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return null;
  const { completed, total, pct } = getProgress(moduleId, progress);

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to modules
      </button>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-zinc-500">{mod.category}</span>
          <span className="text-zinc-700">·</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${LEVEL_STYLES[mod.level]}`}>
            {mod.level}
          </span>
        </div>
        <h2 className="text-2xl font-light text-white mb-2">{mod.title}</h2>
        <p className="text-zinc-400 text-sm mb-5">{mod.description}</p>

        <div className="flex justify-between text-xs text-zinc-400 mb-2">
          <span>{completed} of {total} lessons complete</span>
          <span className={pct === 100 ? 'text-emerald-400' : 'text-yellow-400'}>{pct}%</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full transition-all ${pct === 100 ? 'bg-emerald-400' : 'bg-yellow-400'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Lesson list */}
      <div className="space-y-2">
        {mod.lessons.map((lesson, idx) => {
          const complete = isLessonComplete(moduleId, lesson.id, progress);
          const prevComplete = idx === 0 || isLessonComplete(moduleId, mod.lessons[idx - 1].id, progress);
          const locked = !prevComplete && !complete;

          return (
            <button
              key={lesson.id}
              onClick={() => !locked && onSelectLesson(lesson.id)}
              disabled={locked}
              className={`w-full flex items-center gap-4 p-4 bg-zinc-900 border rounded-xl text-left transition-colors ${
                locked
                  ? 'border-zinc-800/50 opacity-50 cursor-not-allowed'
                  : 'border-zinc-800 hover:border-zinc-700 cursor-pointer'
              }`}
            >
              {/* State icon */}
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                {complete ? (
                  <CheckCircle size={20} className="text-emerald-400" />
                ) : locked ? (
                  <Lock size={16} className="text-zinc-600" />
                ) : (
                  <span className="w-8 h-8 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 text-xs font-bold">
                    {idx + 1}
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${locked ? 'text-zinc-600' : 'text-white'}`}>
                  {lesson.title}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                  <Clock size={11} /> {lesson.durationMins} min
                </p>
              </div>

              {!locked && (
                <ChevronRight size={16} className={complete ? 'text-emerald-400' : 'text-zinc-600'} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Lesson View ──────────────────────────────────────────────────────────────

function LessonView({ moduleId, lessonId, onBack, onNext, progress, setProgress }) {
  const mod = MODULES.find((m) => m.id === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(
    () => isLessonComplete(moduleId, lessonId, progress),
  );

  if (!mod || !lesson) return null;

  const allAnswered = lesson.quiz.every((q) => answers[q.id] !== undefined);
  const allCorrect = lesson.quiz.every((q) => answers[q.id] === q.correct);
  const lessonIdx = mod.lessons.findIndex((l) => l.id === lessonId);
  const nextLesson = mod.lessons[lessonIdx + 1];

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  function handleMarkComplete() {
    markComplete(moduleId, lessonId, progress, setProgress);
    setCompleted(true);
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb + back */}
      <div className="flex items-center gap-2 text-sm text-zinc-500">
        <button onClick={onBack} className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft size={14} /> {mod.title}
        </button>
        <ChevronRight size={14} />
        <span className="text-zinc-300">Lesson {lessonIdx + 1}</span>
      </div>

      {/* Lesson header */}
      <div>
        <p className="text-xs text-zinc-500 mb-1 flex items-center gap-1">
          <Clock size={11} /> {lesson.durationMins} min read
        </p>
        <h2 className="text-2xl font-light text-white">{lesson.title}</h2>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {lesson.content.split('\n\n').map((para, i) => (
          <p key={i} className="text-zinc-300 text-sm leading-relaxed">{para}</p>
        ))}
      </div>

      {/* Key takeaway */}
      <div className="border-l-2 border-yellow-400 pl-4 py-1">
        <p className="text-xs font-semibold text-yellow-400 mb-1 uppercase tracking-wide">Key Takeaway</p>
        <p className="text-sm text-zinc-200">{lesson.takeaway}</p>
      </div>

      {/* Quiz */}
      {lesson.quiz.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-base font-medium text-white flex items-center gap-2">
            <BookOpen size={16} className="text-yellow-400" /> Check your understanding
          </h3>

          {lesson.quiz.map((q, qi) => {
            const selected = answers[q.id];
            const isCorrect = submitted && selected === q.correct;
            const isWrong = submitted && selected !== undefined && selected !== q.correct;

            return (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-medium text-zinc-200">
                  {qi + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    let optStyle = 'border-zinc-800 text-zinc-300 hover:border-zinc-600';
                    if (!submitted && answers[q.id] === oi) {
                      optStyle = 'border-yellow-400/50 bg-yellow-400/5 text-white';
                    } else if (submitted && oi === q.correct) {
                      optStyle = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400';
                    } else if (submitted && answers[q.id] === oi && oi !== q.correct) {
                      optStyle = 'border-rose-500/50 bg-rose-500/10 text-rose-400';
                    }

                    return (
                      <button
                        key={oi}
                        disabled={submitted}
                        onClick={() => !submitted && setAnswers((a) => ({ ...a, [q.id]: oi }))}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all disabled:cursor-default ${optStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <p className={`text-xs font-medium ${isCorrect ? 'text-emerald-400' : isWrong ? 'text-rose-400' : 'text-zinc-500'}`}>
                    {isCorrect ? '✓ Correct' : isWrong ? `✗ Incorrect — the right answer is: ${q.options[q.correct]}` : ''}
                  </p>
                )}
              </div>
            );
          })}

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black text-sm font-semibold rounded-full transition-colors"
            >
              Submit answers
            </button>
          ) : (
            <div className="flex items-center gap-3">
              {!allCorrect && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full transition-colors"
                >
                  <RotateCcw size={13} /> Try again
                </button>
              )}
              <p className={`text-sm font-medium ${allCorrect ? 'text-emerald-400' : 'text-zinc-400'}`}>
                {allCorrect
                  ? '🎉 All correct!'
                  : `${lesson.quiz.filter((q) => answers[q.id] === q.correct).length} / ${lesson.quiz.length} correct`}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Mark complete / next */}
      <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
        {completed ? (
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <CheckCircle size={16} /> Lesson complete
          </div>
        ) : (
          <button
            onClick={handleMarkComplete}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full transition-colors"
          >
            <Award size={15} /> Mark as complete
          </button>
        )}

        {nextLesson && completed && (
          <button
            onClick={() => onNext(nextLesson.id)}
            className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-full transition-colors ml-auto"
          >
            Next lesson <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Root view ────────────────────────────────────────────────────────────────

export default function LearningView() {
  const [view, setView] = useState('list');
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [progress, setProgress] = useLocalStorage('draftlab-progress', {});

  function selectModule(moduleId) {
    setActiveModuleId(moduleId);
    setView('module');
  }

  function selectLesson(lessonId) {
    setActiveLessonId(lessonId);
    setView('lesson');
  }

  function nextLesson(lessonId) {
    setActiveLessonId(lessonId);
    // Reset lesson view state by re-mounting via key — handled inside LessonView
  }

  if (view === 'lesson') {
    return (
      <div className="p-8">
        <LessonView
          key={`${activeModuleId}-${activeLessonId}`}
          moduleId={activeModuleId}
          lessonId={activeLessonId}
          onBack={() => setView('module')}
          onNext={nextLesson}
          progress={progress}
          setProgress={setProgress}
        />
      </div>
    );
  }

  if (view === 'module') {
    return (
      <div className="p-8">
        <ModuleDetail
          moduleId={activeModuleId}
          onBack={() => setView('list')}
          onSelectLesson={selectLesson}
          progress={progress}
        />
      </div>
    );
  }

  return (
    <div className="p-8">
      <ModuleList onSelectModule={selectModule} progress={progress} />
    </div>
  );
}
