import express from 'express';
import path from 'path';

const ShopRoutes = express.Router();

ShopRoutes.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

ShopRoutes.get('/add-product', (req, res) => {
    res.sendFile(path.resolve('./src/shop/views/add-product.html'));
});

ShopRoutes.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/shop/views/index.html'));
});

export { ShopRoutes };