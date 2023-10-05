// https://www.npmjs.com/package/express
import express from 'express';
import { getArtist, getArtists } from './music/api';

const app = express();
const PORT = process.env.PORT ?? 3000;

let requestId = 0;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} [${requestId++}] Starting request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/setTimeout', (req, res) => {
    setTimeout(() => res.send('OK!'), 5_000);
});


app.get('/blocking', (req, res) => {
    let end = new Date().getTime() + 5_000; // +5 seconds
    while (new Date().getTime() < end) {
        // "busy loop"
    }
    res.send('OK!');
});


app.get('/promise', (req, res) => {
    sleep(5_000).then(text => res.send(text));
});


app.get('/async-await', async (req, res) => {
    let p = sleep(5_000);
    let text = await p;
    res.send(text);
});



app.get('/artists', async (req, res) => {
    try {
        let artists = await getArtists();
        let text = artists.map(a => a.name).join('\n');
        res.contentType('text/plain').send(text);
    } catch (e) {
        console.error(e);
        res.status(500).send('internal server error');
    }
});

app.get('/artists/albums', async (req, res) => {
    try {
        let text = '';
        let artists = await getArtists();

        for (let a of artists) {
            let artist = await getArtist(a);
            let titles = artist.albums.map(album => `- ${album.title}`);
            text += artist.name + '\n' + titles.join('\n') + '\n\n';
        }

        res.contentType('text/plain').send(text);
    } catch (e) {
        console.error(e);
        res.status(500).send('internal server error');
    }
});


function sleep(millis: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('OK!'), millis);
    });
}


app.listen(PORT, () => console.log(`server started at port ${PORT}`)); // kuunneltava portti
