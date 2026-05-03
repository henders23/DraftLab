import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, CheckCircle, Circle, PlayCircle, ArrowRight } from 'lucide-react';
import { getTopicBySlug } from '../data/learningContent';
import { useProgress } from '../context/ProgressContext';

function getLessonStatus(lessons, lessonIndex, topicSlug, isLessonComplete) {
  if (isLessonComplete(topicSlug, lessons[lessonIndex].slug)) return 'complete';
  const allPriorComplete = lessons.slice(0, lessonIndex).every((l) =>
    isLessonComplete(topicSlug, l.slug)
  );
  if (allPriorComplete) return 'in_progress';
  return 'not_started';
}

export default function TopicView() {
  const { topicSlug } = useParams();
  const navigate = useNavigate();
  const topic = getTopicBySlug(topicSlug);
  const { topicProgress, isLessonComplete } = useProgress();

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto text-center py-24">
        <p className="text-zinc-400 mb-4">Topic not found.</p>
        <Link to="/learning" className="text-white hover:text-zinc-300 text-sm">
          ← Back to all topics
        </Link>
      </div>
    );
  }

  const progress = topicProgress[topic.slug] ?? { completed: 0, total: topic.lessons.length };
  const pct = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Breadcrumb */}
      <Link
        to="/learning"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        <ChevronLeft size={14} /> All Topics
      </Link>

      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div>
            <h2 className="text-2xl font-light text-white mb-1">{topic.title}</h2>
            <p className="text-zinc-400 text-sm">{topic.description}</p>
          </div>
          <div className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">
            {progress.completed}/{progress.total} lessons
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-zinc-800 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full transition-all duration-500 bg-white"
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct > 0 && (
          <p className="text-xs text-zinc-500 mt-1.5">{pct}% complete</p>
        )}
      </div>

      {/* Lesson list */}
      <div className="space-y-2">
        {topic.lessons.map((lesson, i) => {
          const status = getLessonStatus(topic.lessons, i, topic.slug, isLessonComplete);
          const to = `/learning/${topic.slug}/${lesson.slug}`;

          return (
            <div
              key={lesson.slug}
              onClick={() => navigate(to)}
              className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors cursor-pointer group"
            >
              {/* Status icon */}
              <div className="shrink-0">
                {status === 'complete'    && <CheckCircle size={20} className="text-white" />}
                {status === 'in_progress' && <PlayCircle  size={20} className="text-white" />}
                {status === 'not_started' && <Circle      size={20} className="text-zinc-700" />}
              </div>

              {/* Lesson info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium transition-colors ${
                  status === 'complete' ? 'text-zinc-400' : 'text-zinc-200 group-hover:text-white'
                }`}>
                  {lesson.title}
                </p>
                <p className="text-xs text-zinc-600 mt-0.5 flex items-center gap-1">
                  <Clock size={10} /> {lesson.durationMins} min
                  {status === 'complete'    && <span className="ml-2 text-zinc-500">· Complete</span>}
                  {status === 'in_progress' && <span className="ml-2 text-zinc-300">· Continue</span>}
                </p>
              </div>

              {/* CTA */}
              <Link
                to={to}
                onClick={(e) => e.stopPropagation()}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
                  status === 'complete'
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400'
                    : status === 'in_progress'
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                {status === 'complete' ? 'Review' : status === 'in_progress' ? 'Continue' : 'Start'}
                <ArrowRight size={12} className="inline ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
