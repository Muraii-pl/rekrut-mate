import { GetQuestionsDto } from '../dto/get-questions.dto';
import { Question } from '../../domain/entities';
import { GetQuestionDto } from '../dto/get-question.dto';

export const toQuestionsDto = (questions: Question[]): GetQuestionsDto[] => {
  return questions.map((question) => {
    return {
      question: question.question,
      slug: question.slug,
      createdAt: question.createdAt,
      author: {
        name: question['author'].name,
      },
      tags: question['tags'].map(tag => tag.name),
    };
  });
};

export const toQuestionDto = (question: Question): GetQuestionDto => {
  return {
    question: question.question,
    slug: question.slug,
    createdAt: question.createdAt,
    author: {
      name: question['author'].name,
    },
    answer: question.answer,
    tags: question['tags'].map(tag => tag.name),
    comments: question['comments'].map(comment => ({
      content: comment.content,
      author: {
        name: comment['author'].name,
      },
      replies: comment['replies'].map(reply => ({
        content: reply.content,
        author: {
          name: reply['author'].name,
        }
      }))
    }))
  };
};
