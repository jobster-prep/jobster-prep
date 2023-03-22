import {PrismaClient} from '@prisma/client';
import test, {describe} from 'node:test';
const request = require('supertest');
import app from './src/server/server.ts';

const prisma = new PrismaClient();

//connect to prisma client before each test
beforeAll(async () => {
  await prisma.$connect();
});

//disconnect after each test
afterAll(async () => {
  await prisma.$disconnect();
});

describe('POST /questions', () => {
  test('can add a question into the database', async () => {
    const res = await request(app)
      .post('/api/questions')
      .send({quesiton: 'hello', answer: 'hi', topic: 'Javascript'})
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      question: 'hello',
      answer: 'hi',
      topic: 'Javascript',
    });

    const question = await prisma.question.findUnique({
      where: {question: 'hello'},
    });
    expect(question).toMatchObject({
      id: 1,
      question: 'hello',
      answer: 'hi',
      topic: 'Javascript',
    });
  });
});

describe('GET /questions', () => {
  test('can fetch questions from database', async () => {
    const res = await request(app)
      .post('/api/questions')
      .send({quesiton: 'hello', answer: 'hi', topic: 'Javascript'})
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      question: 'hello',
      answer: 'hi',
      topic: 'Javascript',
    });
    const questions = await prisma.questions.findMany();

    expect(questions.length).toBeGreaterThan(0);
  });
});
