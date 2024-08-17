import * as vectorust from '../dist/cjs/vectorust';

describe('vectorust', () => {
  it('Whitespace removal', () => {
    expect(vectorust.remove_whitespace('Namo Buddhaya')).toEqual(['Namo', 'Buddhaya']);
  });
  it('Check Emails', () => {
    expect(vectorust.find_emails('hi this is an email: info@example.lk')).toEqual(['info@example.lk']);
  });
});