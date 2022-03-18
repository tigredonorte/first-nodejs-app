import express from 'express';

const ShopRoutes = express.Router();

const products = [];
ShopRoutes.post('/add-product', (req, res) => {
    products.push(req.body);
    res.redirect('/products');
});

ShopRoutes.get('/add-product', (req, res) => {
    res.render('shop/views/add-product', { docTitle: 'Add Products', path: '/products/add-product' });
});

ShopRoutes.get('/', (req, res) => {
    res.render('shop/views/index', { products, docTitle: 'My shop', path: '/products' });
});

export { ShopRoutes, products };