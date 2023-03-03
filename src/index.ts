// https://www.npmjs.com/package/express
import express from 'express';
import { words as finnish } from './palindromes/finnishWords';
import { findTwoWordPalindromes, findPalindromesWith } from './palindromes/palindrome';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} Request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/finnish-palindromes', (req, res) => {
    let palindromes = findTwoWordPalindromes(finnish.slice(0, 10_000));
    res.send([...palindromes]);
});

app.get('/palindromes/:word', (req, res) => {
    let word = req.params.word;
    let palindromes = [...findPalindromesWith(word, finnish)];
    res.json(palindromes);
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`));