import express, {Request, Response, NextFunction, RequestHandler} from 'express';

const app = express();
app.use(express.json());

console.log('===> HELLO FROM SERVER');

app.get('/questions', (req: Request, res: Response, next: NextFunction) => res.sendStatus(200));

app.post('/questions', (req: Request, res: Response, next: NextFunction) => res.sendStatus(200));

type ServerError = {
  log: string;
  status: number;
  message: {
    err: string;
  };
};

app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('server is listening on port 3000'));
