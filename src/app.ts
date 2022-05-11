import 'dotenv/config';
import Koa from 'koa';
import koaBody from 'koa-body';
import KoaCors from '@koa/cors';
import KoaRouter from '@koa/router';
import KoaLogger from 'koa-logger';

import api from './api/index';

const app = new Koa();
const router = new KoaRouter();

router.use('/', api.routes(), api.allowedMethods());

app.use(koaBody());
app.use(KoaCors());
app.use(KoaLogger());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || '4000';
app.listen(port);
console.log(`Koa 开始监听 ${port} 端口`);
