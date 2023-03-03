import { findTwoWordPalindromes, isPalindrome } from './palindrome';
import { test, describe, expect } from '@jest/globals';

/**
 * Source: ChatGPT
 */
describe('isPalindrome', () => {
    test('returns true for "racecar"', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('returns true for "A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('returns false for "hello world"', () => {
        expect(isPalindrome('hello world')).toBe(false);
    });

    test('returns true for "12321"', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    test('returns true for "Was it a car or a cat I saw?"', () => {
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });
});

describe('findTwoWordPalindromes', () => {
    test('returns all two word combinations that make a palindrome', () => {
        expect(findTwoWordPalindromes(['hello', 'car', 'world', 'race'])).toEqual(['racecar']);
    });
});