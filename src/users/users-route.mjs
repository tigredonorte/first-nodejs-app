import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const UsersRouter = express.Router();

UsersRouter.post('/create', async(req, res) => {   
    const readed = await fs.readFile('user-list.json');
    const temp = JSON.parse(Buffer.concat([readed]).toString());
    temp.push(req.body);
    await fs.writeFile('user-list.json', JSON.stringify(temp), 'utf-8');

    res.writeHead(301, { Location: '/users' });
    res.end();
});

UsersRouter.get('/create', async(req, res) => {
    res.render('users/views/users-form', { docTitle: 'Create user' });
});

UsersRouter.get('/', async(req, res) => {
    const readed = await fs.readFile('user-list.json');
    const users = JSON.parse(Buffer.concat([readed]).toString());
    res.render('users/views/index', { users, docTitle: 'User List' });
});

export { UsersRouter };