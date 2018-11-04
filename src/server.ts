import * as dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: '.env' });

const port = process.env.APP_SERVER_PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`Listening on port ${port}`);
});

export default app;
