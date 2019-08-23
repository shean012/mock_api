const convert = require('koa-convert');
import * as bodyParser from 'koa-bodyparser';

const config: bodyParser.Options = {
  enableTypes: ['json', 'form', 'text'],
  jsonLimit: '20mb'
};

export default convert(bodyParser(config));
