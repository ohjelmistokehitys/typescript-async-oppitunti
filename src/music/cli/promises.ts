/**
 * Usage: npx ts-node src/music/cli/promises.ts
 */
import { getArtist, getArtists } from "../api";

async function main() {
    let artists = await getArtists();

    for (let a of artists) {
        getArtist(a).then(artist => {
            console.log(artist.name);
            artist.albums.forEach(album => {
                console.log(`- ${album.title}`);
            });
            console.log();
        });
    }
}

main();
