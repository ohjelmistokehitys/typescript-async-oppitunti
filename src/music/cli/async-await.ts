/**
 * Usage: npx tsc && time node build/music/cli/promises.js
 */
import { getArtist, getArtists } from "../api";

async function main() {
    let artists = await getArtists();

    for (let a of artists) {
        let artist = await getArtist(a);
        console.log(artist.name);
        artist.albums.forEach(album => {
            console.log(`- ${album.title}`);
        });
        console.log();
    }
}

main();
