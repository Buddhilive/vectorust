import * as sltk from '../dist/cjs/sltk';

describe('sltk', () => {
  it('Whitespace removal', () => {
    expect(sltk.remove_whitespace('Namo Buddhaya')).toEqual(['Namo', 'Buddhaya']);
  });
  it('Check Emails', () => {
    expect(sltk.find_emails('hi this is an email: info@example.lk')).toEqual(['info@example.lk']);
  });
});