import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/client/App';
import Html from './src/client/Html';

const port = 5000;
const server = express();

server.get('/', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const body = renderToString(<App />);
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      title
    })

  );
});

server.use(express.static('${_dirname}/build'));
server.get('/api',(res,req) =>{
  const body = renderToString(<App />);
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      title
    })
);
})

server.listen(port);
console.log(`Serving at http://localhost:${port}`);