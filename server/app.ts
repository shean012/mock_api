import * as Koa from 'koa';
import * as DebugLogger from 'koa-logger';
import * as JsonParser from 'koa-json';
// import * as Static from 'koa-static';
// import * as path from 'path';
import * as compress from 'koa-compress';
import bodyParser from './middlewares/bodyParser';
import { onError } from './middlewares/errorCatch';
// const historyApiFallback = require('koa2-connect-history-api-fallback');
const cors = require('@koa/cors');

const app = new Koa();

// error catch
app.use(DebugLogger());

// compress
app.use(compress({
  filter: () => true,
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));

// corrs
app.use(cors());
app.use(onError);

// parser
app.use(bodyParser);
app.use(JsonParser());

app.use(require('./routers/user'));

app.listen(3000);

console.log("Server running on port 3000");