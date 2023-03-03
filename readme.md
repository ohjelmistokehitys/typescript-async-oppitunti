# Asynkroninen ohjelmointi

TypeScript, Express, Promiset, async / await...

```
$ npm install express
$ npm install @types/express --save-dev
```

```
$ npx ts-node src/client.ts
```

```
$ npm start
```

```
$ curl https://raw.githubusercontent.com/hugovk/everyfinnishword/master/kaikkisanat.txt > kaikkisanat.txt
```

## Notes about branches

* main
    * `npx ts-node src/client.ts`
* feature/finnish-palindromes
    * "single threaded"
    * `npx ts-node src/palindromes/finnishPalindromes.ts`
    * `npm start`
* feature/finnish-palindromes-promise
    * promises but still blocking
* feature/finnish-palindromes-yield
    * blocking, but with a generator function
    * `npx ts-node src/palindromes/finnishPalindromes.ts`
* feature/finnish-palindromes-faster
    * slightly improved performance
    * `npx ts-node src/palindromes/finnishPalindromes.ts`
    * endpoint for palindromes with a given word: http://localhost:3000/palindromes/kauppias
* feature/music-app
    * `npx ts-node src/music/cli/promises.ts`
        * incorrect order
    * `npx ts-node  src/music/cli/async-await.ts`
        * right order, but sequential
    * `npx ts-node  src/music/cli/promise-all.ts`
        * right order, and non-blocking
        http://localhost:3000/artists/albums
