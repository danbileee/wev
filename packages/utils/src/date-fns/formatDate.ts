import { format, isFirstDayOfMonth } from 'date-fns';

const DateFormats = {
  KO: 'yyyy/MM/dd',
  EN: 'MM/dd/yyyy',
  NO_DELIMITER: 'yyyyMMdd',
} as const;

export type DateFormat = keyof typeof DateFormats;

export default function formatDate(date: Date, dateFormat: DateFormat) {
  return format(date, DateFormats[dateFormat]);
}
