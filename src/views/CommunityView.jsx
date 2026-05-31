import React, { useEffect, useMemo, useState } from 'react';
import {
  Users, Loader2, GraduationCap, Globe, Languages, MapPin, Sparkles,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { DISCIPLINES, LANGUAGES, COUNTRIES } from '../data/profileOptions';

function initialsFrom(name) {
  const s = (name || '').trim();
  if (!s) return '?';
  const parts = s.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const filterSelectClass =
  'bg-zinc-950 border border-zinc-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:border-zinc-500 transition-all';

function MetaRow({ icon, children }) {
  if (!children) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-zinc-400">
      {icon} {children}
    </p>
  );
}

export default function CommunityView() {
  const { user, profile } = useAuth();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discipline, setDiscipline] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, bio, university, discipline, research_stage, native_language, country, timezone')
        .neq('id', user.id)
        .order('created_at', { ascending: false })
        .limit(200);
      if (!active) return;
      if (error) console.error('Failed to load community:', error.message);
      else setMembers(data);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [user.id]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      if (discipline && m.discipline !== discipline) return false;
      if (language && m.native_language !== language) return false;
      if (country && m.country !== country) return false;
      if (q) {
        const hay = `${m.full_name || ''} ${m.university || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [members, discipline, language, country, query]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
          <Users size={28} /> Community
        </h2>
        <p className="text-zinc-400">
          Find PhD students in your field, your timezone, or who share your native language.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or university…"
          className={`${filterSelectClass} flex-1 min-w-[200px] placeholder:text-zinc-600`}
        />
        <select value={discipline} onChange={(e) => setDiscipline(e.target.value)} className={filterSelectClass}>
          <option value="">All disciplines</option>
          {DISCIPLINES.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className={filterSelectClass}>
          <option value="">Any native language</option>
          {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={country} onChange={(e) => setCountry(e.target.value)} className={filterSelectClass}>
          <option value="">Any country</option>
          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={24} className="animate-spin text-zinc-600" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <p className="text-zinc-400">No members match these filters yet.</p>
          <p className="text-zinc-600 text-sm mt-1">
            As the community grows, you'll find more writers here.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((m) => {
            const sharesLanguage =
              m.native_language && m.native_language === profile?.native_language;
            const sharesField = m.discipline && m.discipline === profile?.discipline;
            return (
              <div
                key={m.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-sm font-bold shrink-0">
                    {initialsFrom(m.full_name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white truncate">
                      {m.full_name || 'Anonymous writer'}
                    </p>
                    {m.research_stage && (
                      <p className="text-xs text-zinc-500">{m.research_stage}</p>
                    )}
                  </div>
                </div>

                {m.bio && (
                  <p className="text-sm text-zinc-400 leading-relaxed mb-3 line-clamp-2">{m.bio}</p>
                )}

                <div className="space-y-1">
                  <MetaRow icon={<GraduationCap size={13} className="text-zinc-500" />}>{m.discipline}</MetaRow>
                  <MetaRow icon={<Globe size={13} className="text-zinc-500" />}>{m.country}</MetaRow>
                  <MetaRow icon={<Languages size={13} className="text-zinc-500" />}>{m.native_language}</MetaRow>
                  <MetaRow icon={<MapPin size={13} className="text-zinc-500" />}>{m.university}</MetaRow>
                </div>

                {(sharesLanguage || sharesField) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {sharesField && (
                      <span className="flex items-center gap-1 text-xs text-zinc-200 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full">
                        <Sparkles size={11} /> Same field
                      </span>
                    )}
                    {sharesLanguage && (
                      <span className="flex items-center gap-1 text-xs text-zinc-200 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full">
                        <Sparkles size={11} /> Same language
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
