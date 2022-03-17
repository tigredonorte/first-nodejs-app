import fs from 'fs/promises';

export default async function(req, res) {
    const readed = await fs.readFile('user-list.json');
    const users = JSON.parse(Buffer.concat([readed]).toString());
    res.write(`<html><head> <title>Users</title> </head><body><ul>`);
    users.map(user => res.write(`<li><b>${user.username}</b>: ${user.email}</li>`));
    res.write('</ul></body></html>');
    res.end();
}