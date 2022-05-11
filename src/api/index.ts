import KoaRouter from '@koa/router';

const router = new KoaRouter();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!';
});

export default router;
