import formatDate from '../src/date-fns/formatDate';

describe('formatDate', () => {
  test('날짜를 "/" 구분자 넣어 한국어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'SLASH_KO')).toBe('2023/05/01');
  });

  test('날짜를 "/" 구분자 넣어 영어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'SLASH_EN')).toBe('05/01/2023');
  });

  test('날짜를 "." 구분자 넣어 한국어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'DOT_KO')).toBe('2023.05.01');
  });

  test('날짜를 "." 구분자 넣어 영어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'DOT_EN')).toBe('05.01.2023');
  });

  test('날짜를 구분자 없이 8자리로 표시합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'NO_DELIMITER_8')).toBe('20230501');
  });

  test('날짜를 구분자 없이 6자리로 표시합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'NO_DELIMITER_6')).toBe('230501');
  });
});
