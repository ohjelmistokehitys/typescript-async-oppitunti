# TypeScript, Express, Promiset, async / await...

## Example data

https://ohjelmistokehitys.github.io/json-demo/

> This repository holds a script for converting the Chinook sample database into a bunch of JSON files. They are intended for imitating an API that returns responses in JSON format.
>
> See example responses from URLs:
>
> * https://ohjelmistokehitys.github.io/json-demo/api/artists.json
> * https://ohjelmistokehitys.github.io/json-demo/api/artists/1.json


## How to run the examples

* `npx ts-node src/music/cli/promises.ts`
    * incorrect order
* `npx ts-node  src/music/cli/async-await.ts`
    * right order, but sequential
* `npx ts-node  src/music/cli/promise-all.ts`
    * right order, and non-blocking
    http://localhost:3000/artists/albums


## License

> *"Chinook is a sample database available for SQL Server, Oracle, MySQL, etc. It can be created by running a single SQL script. Chinook database is an alternative to the Northwind database, being ideal for demos and testing ORM tools targeting single and multiple database servers."*
>
> https://github.com/lerocha/chinook-database

```
Chinook Database
--------------------------------------
Copyright (c) 2008-2017 Luis Rocha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```
