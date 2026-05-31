import React, { useState } from 'react';
import { UserCircle, Loader2, Coins, Globe } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import {
  DISCIPLINES,
  RESEARCH_STAGES,
  LANGUAGES,
  COUNTRIES,
  TIMEZONES,
} from '../data/profileOptions';

const inputClass =
  'w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600';

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Select({ value, onChange, options, placeholder }) {
  return (
    <select value={value || ''} onChange={onChange} className={inputClass}>
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        const val = typeof opt === 'string' ? opt : opt.value;
        const lbl = typeof opt === 'string' ? opt : opt.label;
        return (
          <option key={val} value={val}>
            {lbl}
          </option>
        );
      })}
    </select>
  );
}

export default function ProfileView() {
  const { user, profile, refreshProfile } = useAuth();
  const toast = useToast();

  const [form, setForm] = useState({
    full_name: profile?.full_name || '',
    bio: profile?.bio || '',
    university: profile?.university || '',
    discipline: profile?.discipline || '',
    research_stage: profile?.research_stage || '',
    native_language: profile?.native_language || '',
    country: profile?.country || '',
    timezone: profile?.timezone || '',
  });
  const [saving, setSaving] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update(form)
      .eq('id', user.id);
    setSaving(false);
    if (error) {
      toast(`Could not save: ${error.message}`);
      return;
    }
    await refreshProfile();
    toast('Profile saved.');
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <UserCircle size={28} /> Your Profile
          </h2>
          <p className="text-zinc-400">
            Tell the community who you are — it powers peer matching and writing buddies.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 shrink-0">
          <Coins size={14} className="text-zinc-400" />
          <span className="text-sm font-medium text-white">{profile?.credits ?? 0} credits</span>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white">About you</h3>
          <Field label="Full name">
            <input
              type="text"
              value={form.full_name}
              onChange={set('full_name')}
              placeholder="Elena Rossi"
              className={inputClass}
            />
          </Field>
          <Field label="Short bio">
            <textarea
              value={form.bio}
              onChange={set('bio')}
              rows={3}
              placeholder="A sentence or two about your research and what you're working on."
              className={inputClass}
            />
          </Field>
          <Field label="University">
            <input
              type="text"
              value={form.university}
              onChange={set('university')}
              placeholder="University of Edinburgh"
              className={inputClass}
            />
          </Field>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Globe size={15} /> Research & background
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Discipline">
              <Select value={form.discipline} onChange={set('discipline')} options={DISCIPLINES} placeholder="Select discipline" />
            </Field>
            <Field label="Research stage">
              <Select value={form.research_stage} onChange={set('research_stage')} options={RESEARCH_STAGES} placeholder="Select stage" />
            </Field>
            <Field label="Native language">
              <Select value={form.native_language} onChange={set('native_language')} options={LANGUAGES} placeholder="Select language" />
            </Field>
            <Field label="Country">
              <Select value={form.country} onChange={set('country')} options={COUNTRIES} placeholder="Select country" />
            </Field>
            <Field label="Timezone">
              <Select value={form.timezone} onChange={set('timezone')} options={TIMEZONES} placeholder="Select timezone" />
            </Field>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-white hover:bg-zinc-100 text-black text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save profile'}
          </button>
        </div>
      </form>
    </div>
  );
}
