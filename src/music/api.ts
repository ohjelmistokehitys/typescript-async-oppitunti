import { Artist } from "./types";

const API_URL = 'https://ohjelmistokehitys.github.io/json-demo/';

/**
 * Index contains an array of Artists, excluding their albums.
 */
export async function getArtists(): Promise<Omit<Artist, 'albums'>[]> {
    let response = await fetch(API_URL + 'api/artists.json');
    if (!response.ok) {
        throw new Error(`Error ${response.status} from getArtists`);
    }
    let json = await response.json();
    return json.artists;
}


/**
 * Individual endpoint returns albums, too.
 */
export async function getArtist(artist: Pick<Artist, 'url'>): Promise<Artist> {
    let response = await fetch(API_URL + artist.url);
    if (!response.ok) {
        throw new Error(`Error ${response.status} from getArtist`);
    }
    return await response.json();
}
