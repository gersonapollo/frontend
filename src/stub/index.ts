import * as hapi from 'hapi';
import { map } from 'lodash';

import * as routes from './routes';

const server = new hapi.Server({
  host: 'localhost',
  port: 8000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true,
      exposedHeaders: ['x-uid', 'x-access-token'],
      additionalHeaders: ['systemacronym']
    }
  }
});

map(routes, route => server.route(route));

async function start() {
  try {
    await server.start();
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.log(err);
    process.exit(1);
  }
  // tslint:disable-next-line: no-console
  console.log('Stub server running at:', server.info.uri);
}

start();
