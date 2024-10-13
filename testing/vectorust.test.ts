import * as vectorust from '../dist/cjs/vectorust';

describe('vectorust', () => {
  it('Inches to Millimeters', () => {
    expect(vectorust.inches_to_millimeters(5.2)).toBeCloseTo(132.08, 2);
  });
});