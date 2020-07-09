'use strict'

const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.port || '3000'); // acha uma porta pra rodar a aplicação, caso a 3000 não esteja disponível

const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening)
console.log(`API rodando na porta ${port}`);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if(isNaN(port)) {
    return val;
  }
  if(port >= 0) {
    return port;
  }

  return false;
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + port);
}