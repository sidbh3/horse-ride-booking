import { createEvent } from 'ics';

export function sendCalendarInvite(details) {
  const event = {
    title: 'Horse Riding Session',
    description: `Your session with ${details.horse}`,
    start: [2024, 7, 11, 15, 0],
    duration: { hours: 1 },
    attendees: [{ name: details.name, email: details.email }],
  };

  createEvent(event, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }
    // send the generated ICS file via email
  });
}
