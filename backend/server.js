require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 5000;

app.use(bodyParser());

router.get('/api/ping', ctx => {
  ctx.body = {
    message: 'ok',
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);

console.log(`Server listening at http://localhost:${PORT}`);
