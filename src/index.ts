// https://www.npmjs.com/package/express
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`)); // kuunneltava portti