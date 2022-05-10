import 'dotenv/config';
import Koa from 'koa';
import koaBody from 'koa-body';
import KoaCors from '@koa/cors';
import KoaLogger from 'koa-logger';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.use(koaBody());
app.use(KoaCors());
app.use(KoaLogger());
app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || '4001');
