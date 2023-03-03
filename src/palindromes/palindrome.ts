/**
 * Source: ChatGPT
 */
export function isPalindrome(text: string): boolean {
    // Remove some special characters and convert to lowercase
    text = text.replace(/[\s,!\.\?:]/gi, '').toLowerCase();

    // Loop through half the string and compare characters on either end
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - i - 1]) {
            return false;
        }
    }

    // If we made it through the loop, the text is a palindrome
    return true;
}

export function* findPalindromesWith(search: string, words: string[]): Generator<string> {
    for (let word of words) {
        if (isPalindrome(word + search)) {
            yield word + search;
        }
        if (isPalindrome(search + word)) {
            yield search + word;
        }
    }
}

export function* findTwoWordPalindromes(words: string[]): Generator<string> {
    /* Palindromes start and end with the same character, so we create two
     * maps to group words by their first and last chars. */
    let byFirstChar: Record<string, string[]> = {};
    let byLastChar: Record<string, string[]> = {};

    for (let w of words) {
        let first = w.at(0)!;
        let last = w.at(-1)!;

        // create new arrays if the char appears first time:
        byFirstChar[first] ??= [];
        byLastChar[last] ??= [];

        // store word in arrays based on the first and last chars:
        byFirstChar[first].push(w);
        byLastChar[last].push(w);
    }

    /* For each char, check if there are pairs in the first and last char arrays
     * that make up a palindrome. */
    for (let char of Object.keys(byFirstChar)) {
        let firstWords = byFirstChar[char];
        let secondWords = byLastChar[char] ?? [];

        for (let w1 of firstWords) {
            for (let w2 of secondWords) {
                if (isPalindrome(w1 + w2)) {
                    yield w1 + w2;
                }
            }
        }
    }
}
