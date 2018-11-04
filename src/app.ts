import { BaseContext } from 'koa';
import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx: BaseContext) => {
  ctx.body = {
    data: 'Hello there stranger!'
  };
});

app.use(router.routes());

export default app;
