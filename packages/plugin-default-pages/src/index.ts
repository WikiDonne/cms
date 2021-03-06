import { Origami, Renderer, Route } from '@origami/core-lib';
import {FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED} from 'http-status-codes';
import path from 'path';

const index: Origami.Server.RequestHandler = async (req, res, next) => {
  if (
    res.headersSent ||
    // @ts-ignore Allow for older syntax
    res.body ||
    // @ts-ignore Allow for older syntax
    res.data ||
    res.locals.content.hasContent ||
    res.locals.error
  ) {
    next();
    return;
  }

  let file;
  let data;

  // If it's a API request or the req is not HTML, next()
  if (req.originalUrl.startsWith('/api') || !req.accepts('text/html')) {
    next();
    return;
  }


  switch (req.originalUrl) {
    case '/':
      file = 'index.html';
      data = { title: 'Origami' };
      break;

    case '/unauthorized':
    case '/401':
      file = 'unauthorized.html';
      res.status(UNAUTHORIZED);
      break;

    case '/forbidden':
    case '/403':
      file = 'forbidden.html';
      res.status(FORBIDDEN);
      break;

    case '/500':
      file = 'internal-error.html';
      res.status(INTERNAL_SERVER_ERROR);
      break;

    default:
    case '/404':
      file = 'not-found.html';
      data = { title: 'Page not found' };
      res.status(NOT_FOUND);
  }


  const r = new Renderer();
  res.header('content-type', 'text/html');
  res.locals.content.set(
    await r.render(path.resolve(__dirname, '../templates', file), data)
  );

  next();
};

export interface Options {
  static?: string;
}

module.exports = (server: any, opts: Options = {}) => {
  server.useRouter(new Route('*')
    .position('pre-send')
    .get(index)
  );
  server.static(path.resolve(__dirname, '../static'), opts.static || '/origami/');
};
