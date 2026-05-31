import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { isProfileComplete } from '../../data/profileOptions';

export default function CompleteProfileBanner() {
  const { profile } = useAuth();

  // Wait until the profile has loaded; hide once it's complete.
  if (!profile || isProfileComplete(profile)) return null;

  return (
    <div className="bg-white/5 border border-white/15 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Complete your profile</p>
          <p className="text-sm text-zinc-400">
            Add your discipline, country, and language so we can match you with the right peers.
          </p>
        </div>
      </div>
      <Link
        to="/profile"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors shrink-0"
      >
        Complete profile <ArrowRight size={15} />
      </Link>
    </div>
  );
}
