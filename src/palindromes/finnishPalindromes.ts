/**
 * Usage: npx ts-node src/palindromes/finnishPalindromes.ts
 */

import { words } from './finnishWords';
import { findTwoWordPalindromes } from './palindrome';

let palindromes = findTwoWordPalindromes(words.slice(0, 10_000));

palindromes.forEach(w => console.log(w));
