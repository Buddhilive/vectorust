use wasm_bindgen::prelude::*;
use regex::Regex;

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
/// This function will remove all punctuation marks from a string and split a string by whitespace
/// * `text` - The string that needs to be tokenized by whitespace
pub fn remove_whitespace(text: &str) -> Vec<String> {
    let re = Regex::new(r#"([\s~`!@#$%^&\*\(\){}\[\];:"'<,\.>\?\/\\\-_+=“”‘’–•])"#).unwrap();
    let mut final_tokens = Vec::new();

    for token in re.split(text) {
        if !token.is_empty() && !token.trim().is_empty() {
            final_tokens.push(token.to_string());
        }
    }

    return final_tokens;
}