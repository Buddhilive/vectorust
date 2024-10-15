use wasm_bindgen::prelude::*;

/// Declares a function with C calling convention, making it callable from other languages
/// like JavaScript and C/C++.
///
/// - Use snake_case names for compatibility with C.
/// - Prefer basic types for parameters and return values.
/// - Be mindful of memory management and error handling when interacting with C code.
#[wasm_bindgen]
extern "C" {
    // Your function declarations here
}

#[wasm_bindgen]
/// This function will convert inches to millimeters
/// * `inches` - The value of inches to be converted
pub fn inches_to_millimeters(inches: f64) -> f64 {
    inches * 25.4
}

#[wasm_bindgen]
/// This function will convert millimeters to inches
/// * `mm` - The value of millimeters to be converted
pub fn millimeters_to_inches(mm: f64) -> f64 {
    mm * 0.0394
}

#[wasm_bindgen]
/// This function will convert feet to meters
/// * `foot` - The value of feet to be converted
pub fn feet_to_meters(feet: f64) -> f64 {
    feet * 0.3048
}

#[wasm_bindgen]
/// This function will convert meters to feet
/// * `meters` - The value of meters to be converted
pub fn meters_to_feet(meters: f64) -> f64 {
    meters * 3.2808
}