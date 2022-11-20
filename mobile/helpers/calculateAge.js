export default function calculateAge(date) {
  const dd = new Date(date);
  const now = new Date();
  let year = now.getFullYear() - dd.getFullYear();
  let month = now.getMonth() - dd.getMonth();
  if (month < 0) {
    year -= 1;
    month = 12 + month;
  }
  return `${year} years ${month} months`;
}
