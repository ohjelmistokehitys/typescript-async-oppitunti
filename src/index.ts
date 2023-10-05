// https://www.npmjs.com/package/express
import express from 'express';
import { getArtist, getArtists } from './music/api';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} Request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
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

app.get('/slow', async (req, res) => {
    setTimeout(() => res.send(new Date()), 3_000);
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`)); // kuunneltava portti