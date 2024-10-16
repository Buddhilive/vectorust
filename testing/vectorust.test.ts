import * as vectorust from '../dist/cjs/vectorust';

describe('vectorust', () => {
  it('Inches to Millimeters', () => {
    expect(vectorust.inches_to_millimeters(5.2)).toBeCloseTo(132.08, 2);
  });

  it('Millimeters to Inches', () => {
    expect(vectorust.millimeters_to_inches(132.08)).toBeCloseTo(5.2, 2);
  });

  it('Feet to Meters', () => {
    expect(vectorust.feet_to_meters(10.5)).toBeCloseTo(3.2004, 2);
  });

  it('Meters to Feet', () => {
    expect(vectorust.meters_to_feet(3.2004)).toBeCloseTo(10.5, 2);
  });

  it('Yards to Meters', () => {
    expect(vectorust.yards_to_meters(3.4)).toBeCloseTo(3.10896, 5);
  });

  it('Meters to Yards', () => {
    expect(vectorust.meters_to_yards(3.10896)).toBeCloseTo(3.4, 2);
  });
});