import express from 'express';
import bodyParser from 'body-parser';
import { ShopRoutes } from './src/shop/shop-route.mjs';
import { UsersRouter } from './src/users/users-route.mjs';
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();
app.set('view engine', 'pug');
app.set('views', './src/');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(connectLiveReload());
app.use(express.static('./public'));

app.use('/users', UsersRouter);
app.use('/products', ShopRoutes);

app.get('/', (req, res) => {
  res.redirect('/products');
});
app.use((req, res) => {
  res.render('404', { docTitle: 'Page not found' });
});
app.listen('3000', () => {
    console.log('\nRunning on port 3000\n');
});