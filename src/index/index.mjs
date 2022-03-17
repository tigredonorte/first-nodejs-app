import * as fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { dirname } from 'path';
const __dirname = dirname(__filename);

export default function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(__dirname);
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        res.write(Buffer.concat([ data ]).toString());
        res.end();
    });
}