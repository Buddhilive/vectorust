import * as sltk from '../dist/cjs/sltk';

describe('sltk', () => {
  it('should work', () => {
    expect(sltk.remove_whitespace('Namo Buddhaya')).toEqual(['Namo', 'Buddhaya']);
  });
});