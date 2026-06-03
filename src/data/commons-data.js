export const PEOPLE = [
  { i: 'MZ', name: 'Mei Zhang',        field: 'Education',           v: 0 },
  { i: 'AO', name: 'Aris Okafor',      field: 'Sociology',           v: 1 },
  { i: 'LV', name: 'Lena Vargas',      field: 'Applied Linguistics', v: 3 },
  { i: 'RK', name: 'Ravi Krishnan',    field: 'Public Health',       v: 4 },
  { i: 'SD', name: 'Sofia Duarte',     field: 'Anthropology',        v: 2 },
  { i: 'JN', name: 'Jun Nakamura',     field: 'Materials Science',   v: 0 },
  { i: 'FA', name: 'Fatima Al-Sayed', field: 'Politics',             v: 3 },
  { i: 'EO', name: 'Emeka Obi',        field: 'Economics',           v: 1 },
];

export const EVENTS = [
  { id: 'ev-method',  mon: 'JUN', day: '06', dow: 'Thu', time: '14:00', len: '60 min',
    title: 'Structuring a methodology chapter', type: 'Workshop',
    host: 'Dr. Aris Okafor', going: 24, circle: 3, cover: 'workshop photo' },
  { id: 'ev-sprint',  mon: 'JUN', day: '08', dow: 'Sat', time: '10:00', len: '90 min',
    title: 'Silent writing sprint', type: 'Writing sprint',
    host: 'Peer-led · Education circle', going: 38, circle: 5, cover: 'people writing' },
  { id: 'ev-stance',  mon: 'JUN', day: '12', dow: 'Wed', time: '16:00', len: '45 min',
    title: 'Hedging & stance in academic English', type: 'Language',
    host: 'Lena Vargas', going: 19, circle: 2, cover: 'seminar photo' },
  { id: 'ev-cowrite', mon: 'JUN', day: '13', dow: 'Thu', time: '09:00', len: 'Drop-in',
    title: 'Coffee & co-writing', type: 'Drop-in',
    host: 'Open to all', going: 51, circle: 6, cover: 'cafe co-writing' },
  { id: 'ev-revise',  mon: 'JUN', day: '15', dow: 'Sat', time: '13:00', len: '50 min',
    title: 'From feedback to a revision plan', type: 'Talk',
    host: 'Dr. Aris Okafor', going: 29, circle: 1, cover: 'talk photo' },
  { id: 'ev-present', mon: 'JUN', day: '18', dow: 'Tue', time: '15:00', len: '75 min',
    title: 'Presenting research with confidence', type: 'Workshop',
    host: 'Ravi Krishnan', going: 22, circle: 4, cover: 'presentation photo' },
];

export const FEED = [
  { who: 'Sofia Duarte',    i: 'SD', v: 2, field: 'Anthropology',      time: '20 min ago',
    kind: 'feedback', action: 'shared a draft and asked for feedback',
    quote: '"Does my contribution come through clearly in the introduction, or am I burying it on page three?"',
    meta: 'Introduction · 1,200 words', likes: 6, replies: 4 },
  { who: 'Aris Okafor',     i: 'AO', v: 1, field: 'Sociology',          time: '1 hour ago',
    kind: 'event', action: 'is hosting Thursday\'s session',
    quote: null, eventId: 'ev-method', likes: 12, replies: 3 },
  { who: 'Jun Nakamura',    i: 'JN', v: 0, field: 'Materials Science',  time: '3 hours ago',
    kind: 'win', action: 'posted a milestone',
    quote: '"Submitted Chapter 2 this morning — eight months of work. Thank you all for the sprints."',
    meta: null, likes: 47, replies: 18 },
  { who: 'Fatima Al-Sayed', i: 'FA', v: 3, field: 'Politics',           time: 'Yesterday',
    kind: 'question', action: 'asked the Commons',
    quote: '"How do you keep a reading log that you\'ll actually return to? Apps, notebooks, anything."',
    meta: null, likes: 9, replies: 22 },
];

export const CIRCLE     = { name: 'Education — Year 2', kind: 'Your circle', members: 12, meets: 'Wed 16:00' };
export const DISCIPLINE = { name: 'Education & Social Sciences', kind: 'Discipline', members: 2400, online: 184 };

export const NOTIFICATIONS = [
  { src: 'circle',     who: 'Aris Okafor',   i: 'AO', v: 1, action: 'replied to your feedback request',                   time: '12 min',  act: 'Reply'   },
  { src: 'circle',     who: null,             i: 'ED', v: 3, action: 'Your circle meet starts in 1 hour — Wed 16:00',      time: '40 min',  act: 'Remind'  },
  { src: 'circle',     who: 'Sofia Duarte',   i: 'SD', v: 2, action: 'shared a new draft for feedback',                    time: '1 hour',  act: 'Read'    },
  { src: 'discipline', who: null,             i: 'ES', v: 4, action: 'New workshop · Structuring a methodology chapter',   time: '2 hours', act: 'Join'    },
  { src: 'discipline', who: 'Lena Vargas',    i: 'LV', v: 3, action: 'answered your question on reading logs',             time: '3 hours', act: 'View'    },
  { src: 'discipline', who: 'Emeka Obi',      i: 'EO', v: 1, action: 'joined Education & Social Sciences',                 time: '5 hours', act: 'Welcome' },
  { src: 'discipline', who: null,             i: 'ES', v: 4, action: 'Discipline talk · Publishing your first paper — Fri', time: '1 day',  act: 'Save'    },
];

export const FEEDBACK = [
  { id: 'fb-sofia',  who: 'Sofia Duarte',    i: 'SD', v: 2, field: 'Anthropology',  src: 'discipline',
    title: 'Framing my contribution in the introduction',
    ask: 'Does my contribution actually land, or am I burying it on page three?',
    responses: 2, time: '20 min', active: true },
  { id: 'fb-ravi',   who: 'Ravi Krishnan',   i: 'RK', v: 4, field: 'Public Health', src: 'circle',
    title: 'Justifying my sampling strategy',
    ask: 'Is the rationale convincing, or does it read as defensive?',
    responses: 1, time: '2 hours' },
  { id: 'fb-fatima', who: 'Fatima Al-Sayed', i: 'FA', v: 3, field: 'Politics',       src: 'discipline',
    title: 'Threading the argument through my literature review',
    ask: 'Where exactly do I lose the thread?',
    responses: 5, time: 'Yesterday' },
  { id: 'fb-mine',   who: 'You',             i: 'MZ', v: 0, field: 'Education',      src: 'circle',
    title: 'Chapter 3 — opening paragraphs',
    ask: 'Too dense? I can\'t tell anymore.',
    responses: 0, time: 'Pending', mine: true },
];

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

export const MENTOR = {
  name: 'Dr. Aris Okafor', i: 'AO', v: 1,
  role: 'Senior Research Fellow · Sociology',
  field: 'Qualitative methods · doctoral writing',
  bio: 'Fifteen years supervising doctoral researchers, with a soft spot for the messy middle of a thesis. Warm, direct, and allergic to jargon.',
  langs: ['English', 'Portuguese'],
  rating: '4.9', sessions: 320,
  cadence: 'Fortnightly · 45 minutes',
};

export const SLOTS = [
  { date: 'Thu 5 Jun',  dow: 'THU', day: '05', times: ['09:30', '11:00', '14:30'] },
  { date: 'Fri 6 Jun',  dow: 'FRI', day: '06', times: ['10:00', '15:30'] },
  { date: 'Mon 9 Jun',  dow: 'MON', day: '09', times: [] },
  { date: 'Tue 10 Jun', dow: 'TUE', day: '10', times: ['09:00', '13:00', '16:00'] },
  { date: 'Wed 11 Jun', dow: 'WED', day: '11', times: ['11:30'] },
];

export const SESSIONS = [
  { when: 'Upcoming', date: 'Thu 22 May', time: '14:30', topic: 'Restructuring Chapter 3', status: 'confirmed', with: 'Dr. Aris Okafor', i: 'AO', v: 1 },
  { when: 'Past', date: '8 May',  time: '14:30', topic: 'Framing the contribution',     status: 'notes', with: 'Dr. Aris Okafor', i: 'AO', v: 1,
    note: 'Lead with the claim, not the literature. Try a one-sentence \'the gap is…\' opener.' },
  { when: 'Past', date: '24 Apr', time: '15:00', topic: 'Turning feedback into a plan', status: 'notes', with: 'Dr. Aris Okafor', i: 'AO', v: 1,
    note: 'Batch reviewer comments by theme before revising. Don\'t fix line-by-line.' },
];
