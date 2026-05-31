// Curated option lists for profiles and the community directory.
// Kept as plain arrays so they can drive both <select> inputs and filters.

export const DISCIPLINES = [
  'Anthropology',
  'Architecture',
  'Biology',
  'Business & Management',
  'Chemistry',
  'Computer Science',
  'Earth & Environmental Sciences',
  'Economics',
  'Education',
  'Engineering',
  'Geography',
  'History',
  'Law',
  'Linguistics',
  'Literature',
  'Materials Science',
  'Mathematics',
  'Medicine & Health Sciences',
  'Neuroscience',
  'Philosophy',
  'Physics',
  'Political Science',
  'Psychology',
  'Public Health',
  'Sociology',
  'Other',
];

export const RESEARCH_STAGES = [
  'First year',
  'Coursework',
  'Proposal / Prospectus',
  'Fieldwork / Data collection',
  'Analysis',
  'Writing up',
  'Revising / Submitting',
  'Defended / Post-viva',
];

export const LANGUAGES = [
  'Arabic',
  'Bengali',
  'Chinese (Mandarin)',
  'English',
  'Farsi / Persian',
  'French',
  'German',
  'Greek',
  'Hindi',
  'Indonesian',
  'Italian',
  'Japanese',
  'Korean',
  'Malay',
  'Polish',
  'Portuguese',
  'Russian',
  'Spanish',
  'Swahili',
  'Tamil',
  'Thai',
  'Turkish',
  'Ukrainian',
  'Urdu',
  'Vietnamese',
  'Other',
];

export const COUNTRIES = [
  'Argentina', 'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Brazil',
  'Canada', 'Chile', 'China', 'Colombia', 'Czechia', 'Denmark', 'Egypt',
  'Ethiopia', 'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'Hungary',
  'India', 'Indonesia', 'Iran', 'Ireland', 'Israel', 'Italy', 'Japan',
  'Kenya', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'Netherlands',
  'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Philippines', 'Poland',
  'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa',
  'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan',
  'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Vietnam', 'Other',
];

// Common timezones grouped by region, with a readable label and UTC offset.
export const TIMEZONES = [
  { value: 'Pacific/Auckland', label: 'Auckland (UTC+12/13)' },
  { value: 'Australia/Sydney', label: 'Sydney (UTC+10/11)' },
  { value: 'Asia/Tokyo', label: 'Tokyo / Seoul (UTC+9)' },
  { value: 'Asia/Shanghai', label: 'Beijing / Singapore (UTC+8)' },
  { value: 'Asia/Bangkok', label: 'Bangkok / Jakarta (UTC+7)' },
  { value: 'Asia/Dhaka', label: 'Dhaka (UTC+6)' },
  { value: 'Asia/Karachi', label: 'Karachi / Tashkent (UTC+5)' },
  { value: 'Asia/Kolkata', label: 'India (UTC+5:30)' },
  { value: 'Asia/Dubai', label: 'Dubai (UTC+4)' },
  { value: 'Asia/Tehran', label: 'Tehran (UTC+3:30)' },
  { value: 'Europe/Moscow', label: 'Moscow / Nairobi (UTC+3)' },
  { value: 'Europe/Athens', label: 'Athens / Cairo (UTC+2)' },
  { value: 'Europe/Berlin', label: 'Central Europe (UTC+1/2)' },
  { value: 'Europe/London', label: 'London / Lisbon (UTC+0/1)' },
  { value: 'Atlantic/Cape_Verde', label: 'Cape Verde (UTC-1)' },
  { value: 'America/Sao_Paulo', label: 'São Paulo (UTC-3)' },
  { value: 'America/New_York', label: 'US Eastern (UTC-5/4)' },
  { value: 'America/Chicago', label: 'US Central (UTC-6/5)' },
  { value: 'America/Denver', label: 'US Mountain (UTC-7/6)' },
  { value: 'America/Los_Angeles', label: 'US Pacific (UTC-8/7)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii (UTC-10)' },
];

// Fields that count toward a "complete" profile for onboarding prompts.
export const REQUIRED_PROFILE_FIELDS = [
  'discipline',
  'country',
  'native_language',
  'research_stage',
];

export function isProfileComplete(profile) {
  if (!profile) return false;
  return REQUIRED_PROFILE_FIELDS.every((f) => !!profile[f]);
}
