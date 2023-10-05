/**
 * Usage: npx tsc && time node build/music/cli/promise-all.js
 */
import { getArtist, getArtists } from "../api";

async function main() {
    let listing = await getArtists();

    let promises = listing.map(artist => getArtist(artist));

    let artists = await Promise.all(promises);

    for (let artist of artists) {
        console.log(artist.name);
        artist.albums.forEach(album => {
            console.log(`- ${album.title}`);
        });
        console.log();
    }
}

main();
