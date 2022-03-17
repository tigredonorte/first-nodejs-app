import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { ShopRoutes } from './src/shop/shop-route.mjs';
import { UsersRouter } from './src/users/users-route.mjs';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/users', UsersRouter);
app.use('/products', ShopRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join('.', 'src', 'index.html')));
});

app.use((req, res) => {
    res.status(404).sendFile(path.resolve(path.join('.', 'src', '404.html')));
});
app.listen('3000', () => {
    console.log('\nRunning on port 3000\n');
});