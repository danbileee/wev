import formatDate from '../src/date-fns/formatDate';

describe('formatDate', () => {
  test('날짜를 한국어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'KO')).toBe('2023/05/01');
  });

  test('날짜를 영어식으로 포맷팅합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'EN')).toBe('05/01/2023');
  });

  test('날짜를 구분자 없이 표시합니다.', () => {
    expect(formatDate(new Date('2023-05-01'), 'NO_DELIMITER')).toBe('20230501');
  });
});
