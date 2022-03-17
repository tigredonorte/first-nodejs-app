import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const UsersRouter = express.Router();

UsersRouter.post('/', async(req, res, next) => {   
    const readed = await fs.readFile('user-list.json');
    const temp = JSON.parse(Buffer.concat([readed]).toString());
    temp.push(req.body);
    await fs.writeFile('user-list.json', JSON.stringify(temp), 'utf-8');

    res.writeHead(301, { Location: '/users' });
    res.end();
});

UsersRouter.get('/create', async(req, res, next) => {
    res.sendFile(path.resolve(path.join('.', 'src', 'users', 'views', 'users.form.html')));
});

UsersRouter.get('/', async(req, res, next) => {
    const readed = await fs.readFile('user-list.json');
    const users = JSON.parse(Buffer.concat([readed]).toString());
    res.write(`<html><head> <title>Users</title> </head><body><ul>`);
    users.map(user => res.write(`<li><b>${user.username}</b>: ${user.email}</li>`));
    res.write('</ul></body></html>');
    res.end();
});

export { UsersRouter };