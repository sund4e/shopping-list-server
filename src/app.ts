import { BaseContext } from 'koa';
import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: BaseContext) => {
  ctx.body = 'Hello there stranger!';
});

app.listen(9000);
