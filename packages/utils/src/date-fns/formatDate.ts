import { format } from 'date-fns';

const DateFormats = {
  SLASH_KO: 'yyyy/MM/dd',
  SLASH_EN: 'MM/dd/yyyy',
  DOT_KO: 'yyyy.MM.dd',
  DOT_EN: 'MM.dd.yyyy',
  HYPHEN_KO: 'yyyy-MM-dd',
  HYPHEN_EN: 'MM-dd-yyyy',
  NO_DELIMITER_8: 'yyyyMMdd',
  NO_DELIMITER_6: 'yyMMdd',
} as const;

export type DateFormat = keyof typeof DateFormats;

export default function formatDate(date: Date, dateFormat: DateFormat) {
  return format(date, DateFormats[dateFormat]);
}
