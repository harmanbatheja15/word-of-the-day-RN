export function formatDate(date: Date): string {
  if (!(date instanceof Date)) {
    // Handle string dates from storage
    date = new Date(date);
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Check if the date is today
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }

  // Check if the date is yesterday
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }

  // Format as MMM DD, YYYY (e.g., "Jun 15, 2025")
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}
