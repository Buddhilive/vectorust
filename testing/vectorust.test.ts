import * as vectorust from '../dist/cjs/vectorust';

describe('vectorust', () => {
  it('Inches to Millimeters', () => {
    expect(vectorust.inches_to_millimeters(5.2)).toBeCloseTo(132.08, 2);
  });

  it('Millimeters to Inches', () => {
    expect(vectorust.millimeters_to_inches(132.08)).toBeCloseTo(5.2, 2);
  });
});