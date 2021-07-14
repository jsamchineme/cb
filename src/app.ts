import * as express from 'express';
import * as cors from 'cors';
import baseRouter from 'src/api/router';
import errorHandler from 'src/utils/errorHandler';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Welcome!!!',
  });
});

app.get('/api', (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Welcome to our demo api`);
});

app.use('/api', baseRouter);

app.use('*', (req, res) => {
  return res.status(404).send({
    error: 'Route not found',
  });
});

// handling all request and async errors
app.use((err, req, res, next) => {
  return errorHandler(err, req, res, next);
});

export default app;
