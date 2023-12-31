import * as sltk from '../dist/cjs/sltk';

describe('sltk', () => {
  it('should work', () => {
    expect(sltk.add_numbers(1, 2)).toEqual(3);
  });
});