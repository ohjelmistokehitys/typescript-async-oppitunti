/**
 * Usage: npx ts-node src/palindromes/finnishPalindromes.ts
 */

import { words } from './finnishWords';
import { findTwoWordPalindromes } from './palindrome';

for (let palindrome of findTwoWordPalindromes(words)) {
    console.log(palindrome);
}
