import{controller} from '../types';
import { PrismaClient } from '@prisma/client';


const questionController: controller = {};
const prisma = new PrismaClient()

questionController.getQuestions = async (req, res, next) => {
    console.log('in get Questions')
    try{
        const questions = await prisma.questions.findMany();
        console.log(questions);
        res.locals.data = {questions}
        return next()
    }catch(err){
        return next({
            log: `ERROR - questionController.getQuestions failed to get questions: ${err}`,
            status: 400,
            message: {err},
        });
    }
}

questionController.createQuestion = async (req, res, next) => {
    const { question, answer, topic } = res.locals
    try{
        const result = await prisma.questions.create({
            data: {
                //change this
                quesiton: question,
                answer,
                topic
            }
        });
        console.log(result);
        return next()
    }catch(err){
        return next({
            log: `ERROR - questionController.getQuestions failed to get questions: ${err}`,
            status: 400,
            message: {err},
        });
    }
    
}




export default questionController;
