/**
 * Generates an .ics calendar file data URI for a given event.
 * The returned string can be used directly as an <a href> to trigger a download.
 */
export function generateICS(event) {
  // Build a rough start datetime from the event's date/time strings.
  // For mock data we use a fixed reference; a real backend would supply ISO timestamps.
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  // Parse "HH:MM GMT" → extract hours & minutes
  const timeParts = event.time.replace(' GMT', '').split(':');
  const hh = timeParts[0].padStart(2, '0');
  const mm = timeParts[1]?.padStart(2, '0') ?? '00';

  const dtstart = `${year}${month}${day}T${hh}${mm}00Z`;

  // Estimate end time: parse duration string like "45 mins", "1 hour", "2 hours", "90 mins"
  let durationMins = 60;
  const durMatch = event.duration.match(/(\d+)\s*(min|hour)/i);
  if (durMatch) {
    const val = parseInt(durMatch[1], 10);
    durationMins = durMatch[2].toLowerCase().startsWith('hour') ? val * 60 : val;
  }
  const endDate = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hh), parseInt(mm)) +
      durationMins * 60 * 1000
  );
  const dtend = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DraftLab//Events//EN',
    'BEGIN:VEVENT',
    `UID:draftlab-event-${event.id}@draftlab.app`,
    `DTSTAMP:${dtstart}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `ORGANIZER;CN=${event.host}:mailto:events@draftlab.app`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
