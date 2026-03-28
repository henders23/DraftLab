import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, CheckCircle, Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import { getTopicBySlug, getLessonBySlug } from '../data/learningContent';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';
import AnnotatedExtract from '../components/learning/AnnotatedExtract';

export default function LessonView() {
  const { topicSlug, lessonSlug } = useParams();
  const navigate = useNavigate();
  const { isLessonComplete, markLessonComplete } = useProgress();
  const toast = useToast();

  const topic = getTopicBySlug(topicSlug);
  const lesson = getLessonBySlug(topicSlug, lessonSlug);

  if (!topic || !lesson) {
    return (
      <div className="max-w-3xl mx-auto text-center py-24">
        <p className="text-zinc-400 mb-4">Lesson not found.</p>
        <Link to="/learning" className="text-yellow-400 hover:text-yellow-300 text-sm">
          ← Back to all topics
        </Link>
      </div>
    );
  }

  const lessonIndex = topic.lessons.findIndex((l) => l.slug === lessonSlug);
  const nextLesson = topic.lessons[lessonIndex + 1] ?? null;
  const isComplete = isLessonComplete(topicSlug, lessonSlug);

  function handleMarkComplete() {
    markLessonComplete(topicSlug, lessonSlug);
    toast('Lesson complete! Keep going.');
    if (nextLesson) {
      navigate(`/learning/${topicSlug}/${nextLesson.slug}`);
    } else {
      navigate(`/learning/${topicSlug}`);
    }
  }

  const hasContent = lesson.extracts.length > 0;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <Link to="/learning" className="hover:text-yellow-400 transition-colors">All Topics</Link>
        <span>/</span>
        <Link to={`/learning/${topicSlug}`} className="hover:text-yellow-400 transition-colors">{topic.title}</Link>
        <span>/</span>
        <span className="text-zinc-300">{lesson.title}</span>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <Clock size={11} /> {lesson.durationMins} min
          </span>
          {isComplete && (
            <span className="flex items-center gap-1 text-xs text-emerald-400">
              <CheckCircle size={11} /> Complete
            </span>
          )}
        </div>
        <h2 className="text-2xl font-light text-white mb-2">{lesson.title}</h2>
        <p className="text-zinc-400 leading-relaxed">{lesson.intro}</p>
      </div>

      {/* Annotated extracts or coming-soon */}
      {hasContent ? (
        <div className="space-y-6">
          {lesson.extracts.map((extract, i) => (
            <AnnotatedExtract key={i} extract={extract} variant={extract.variant} />
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
          <BookOpen size={28} className="text-zinc-700 mx-auto mb-3" />
          <p className="text-zinc-400 text-sm mb-1">Full lesson content coming soon.</p>
          <p className="text-zinc-600 text-xs">Annotated extracts and activities are being added.</p>
        </div>
      )}

      {/* Activity prompt */}
      {lesson.activityPrompt && (
        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6">
          <p className="text-xs font-semibold text-yellow-400 mb-2 flex items-center gap-1.5">
            <Lightbulb size={13} /> Activity
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed">{lesson.activityPrompt}</p>
        </div>
      )}

      {/* Key takeaways */}
      {lesson.keyTakeaways?.length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-sm font-medium text-white mb-3">Key takeaways</p>
          <ul className="space-y-2">
            {lesson.keyTakeaways.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mark as complete / navigation */}
      <div className="flex items-center justify-between gap-4 pb-8">
        <Link
          to={`/learning/${topicSlug}`}
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-yellow-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to topic
        </Link>

        {isComplete ? (
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-sm text-emerald-400">
              <CheckCircle size={15} /> Lesson complete
            </span>
            {nextLesson && (
              <Link
                to={`/learning/${topicSlug}/${nextLesson.slug}`}
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors"
              >
                Next <ArrowRight size={14} />
              </Link>
            )}
          </div>
        ) : (
          <button
            onClick={handleMarkComplete}
            className="flex items-center gap-2 px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-xl transition-colors"
          >
            <CheckCircle size={15} />
            {nextLesson ? 'Mark complete & continue' : 'Mark complete'}
          </button>
        )}
      </div>
    </div>
  );
}
