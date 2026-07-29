// Static app data. Events, posts and feedback now live in Supabase
// (project: DraftLab); notifications are empty until a real notification
// pipeline exists.

export const NOTIFICATIONS = [];

export const FEEDBACK = [];

export const PLANS = [
  { id: 'free',     name: 'Free',     price: '£0',   per: 'always free',  tagline: 'For getting started',
    cta: 'Join free', highlight: false,
    features: ['Join the Commons', 'Your circle + disciplinary community', 'Feed, notifications & feedback exchange', 'Up to 2 events a month'] },
  { id: 'standard', name: 'Standard', price: '£39',  per: 'per month',    tagline: 'For the regular attender',
    cta: 'Start free week', highlight: true, badge: '1 week free',
    features: ['Everything in Free', 'Unlimited workshops & events', 'Priority booking', 'Event recordings & resources', 'Open writing-sprint rooms anytime'] },
  { id: 'premium',  name: 'Premium',  price: '£89',  per: 'per month',    tagline: 'For dedicated momentum',
    cta: 'Start free week', premium: true, badge: '1 week free',
    features: ['Everything in Standard', 'Fortnightly 1-to-1 with a mentor', 'Expert feedback on your writing', 'Personal milestone planning', 'Priority in every queue'] },
];

// Mentor matching happens after a member joins Premium; no mentor is assigned yet.
export const MENTOR = null;

export const SLOTS = [];

export const SESSIONS = [];
