export function formatPatchDate(dateStr: string): string {
  if (!dateStr) return '';
  // Append T12:00:00Z to prevent time zone offset shifting the day
  const timestamp = Date.parse(dateStr.includes('T') ? dateStr : `${dateStr}T12:00:00Z`);
  if (isNaN(timestamp)) return dateStr;
  
  const date = new Date(timestamp);
  
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }); // e.g. 12 March 2026
}
