import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test utils functions', () => {
  it('getFullYear returns current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  it('getFooterCopy return Holberton School when true', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it('getFooterCopy return Holberton School main dashboard when false', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it('getLatestNotification return correct', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
