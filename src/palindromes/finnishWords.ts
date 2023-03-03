import { readFileSync } from "fs";
import path from 'path';


let file = path.join(__dirname, '..', '..', 'kaikkisanat.txt');
export const words = readFileSync(file, 'utf-8').split('\n');