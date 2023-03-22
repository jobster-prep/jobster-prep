import express, {
    Request,
    Response,
    NextFunction,
    RequestHandler,
} from 'express';
import {errorObject} from './types';
import questionController from './controllers/questionController';


const app = express();
app.use(express.json());

app.get('/questions', questionController.getQuestions, (req: Request, res: Response) => 
    res.send(res.locals.data)
);

app.post('/questions', questionController.createQuestion, (req: Request, res: Response) => 
    res.sendStatus(200)
);


app.use(
    '/',
    (err: errorObject, req: Request, res: Response, next: NextFunction) => {
      const defaultErr: errorObject = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
      };
      const errorObj: errorObject = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
    }
  );
  
  app.listen(3000, () => console.log('server is listening on port 3000'));


  module.exports = app;