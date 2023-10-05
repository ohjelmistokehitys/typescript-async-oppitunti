export type Artist = {
    id: number;
    name: string;
    url: string;
    albums: Album[];
}

export type Album = {
    id: number;
    title: string;
}