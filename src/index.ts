// https://www.npmjs.com/package/express
import express from 'express';
import { words as finnish } from './palindromes/finnishWords';
import { findTwoWordPalindromes } from './palindromes/palindrome';

const app = express();
const PORT = process.env.PORT ?? 3000;

function palindromesWithPromise(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        let palindromes = findTwoWordPalindromes(finnish.slice(0, 10_000));

        resolve(palindromes);
    });
}

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} Request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/finnish-palindromes', (req, res) => {
    return palindromesWithPromise().then((palindromes) => {
        res.json(palindromes);
    });
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`));