import * as express from 'express';
import 'reflect-metadata';
const app = express();

const greeting: string =  'Welcome to api!' ;

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
