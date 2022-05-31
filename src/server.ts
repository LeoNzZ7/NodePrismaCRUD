import express from 'express';
import { routes } from './routes/routes';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || '3000', () => {
   console.log('HTTP server runing!');
});