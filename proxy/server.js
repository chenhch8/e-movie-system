let proxy = require('http-proxy-middleware');
let express = require('express')
let app = express();

const config = {
  client: '../client/dist/',
  server: proxy({
    target: 'http://localhost:3000'
  }),
  port: 3002,
  serverUrl: 'http://localhost'
}

app.use(express.static(config.client));
app.use('/api', config.server);

app.listen(config.port, console.log(`Proxy listening on ${config.serverUrl}:${config.port}`))