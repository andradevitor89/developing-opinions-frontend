function formatDateToCustomString(
  date: Date,
  { short } = { short: false }
) {
  const daysOfWeek = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
  ];
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate().toString().padStart(2, '0');
  const year = date.getUTCFullYear();
  if (short) {
    return `${month} ${day}`;
  }
  return `${dayOfWeek} ${month} ${day} ${year}`;
}
export { formatDateToCustomString };
