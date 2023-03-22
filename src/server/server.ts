import express, {Request, Response, NextFunction, RequestHandler} from 'express';
import questionController from './controllers/questionController';
import {ServerError} from './types';


const app = express();
app.use(express.json());

app.get('/api/questions', questionController.getQuestions, (req: Request, res: Response, next: NextFunction) => res.send(res.locals.data));

app.post('/api/questions', questionController.createQuestion, (req: Request, res: Response, next: NextFunction) => res.sendStatus(200));



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
