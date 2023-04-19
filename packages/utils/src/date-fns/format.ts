import { format } from 'date-fns';

const DateFormats = {
  BASIC_KO: 'yyyy/MM/dd',
  BASIC_EN: 'MM/dd/yyyy',
} as const;

type DateFormat = keyof typeof DateFormats;

export default function formatDate(date: Date, dateFormat: DateFormat) {
  return format(date, dateFormat);
}
