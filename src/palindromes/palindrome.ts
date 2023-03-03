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

export function* findTwoWordPalindromes(words: string[]): Generator<string> {
    for (let w1 of words) {
        for (let w2 of words) {
            if (isPalindrome(w1 + w2)) {
                yield w1 + w2;
            }
        }
    }
}
