const leadingZero = (x: number): string => (x < 10 ? `0${x}` : `${x}`);
export const calculateLocalTime = function(
  utcOffset: string | null | undefined,
): string {
  if (!utcOffset) return '';
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const offsetNumber = parseInt(utcOffset, 10);
  const newDate = new Date(utc + 3600000 * offsetNumber);
  const newDateHours = leadingZero(newDate.getHours());
  const newDateMinutes = leadingZero(newDate.getMinutes());
  return `${newDateHours}:${newDateMinutes}`;
};
