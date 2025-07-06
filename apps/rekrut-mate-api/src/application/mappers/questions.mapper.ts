import { Question } from '../../domain/entities';
import { QuestionDetailsDto, QuestionDto } from '@rm/dtos';

export const toQuestionsDto = (questions: Question[]): QuestionDto[] => {
  return questions.map((question) => {
    return {
      author: {
        name: question.author!.name,
      },
      createdAt: question.createdAt,
      question: question.question,
      slug: question.slug,
      tags: question.tags!.map(tag => tag.name),
    };
  });
};

export const toQuestionDto = (question: Question): QuestionDetailsDto => {
  return {
    question: question.question,
    slug: question.slug,
    createdAt: question.createdAt,
    author: {
      name: question.author!.name,
    },
    answer: question.answer,
    tags: question.tags!.map(tag => tag.name),
    comments: question.comments!.map(comment => ({
      content: comment.content,
      author: {
        name: comment.author!.name,
      },
      replies: comment.replies!.map(reply => ({
        content: reply.content,
        author: {
          name: reply.author!.name,
        }
      }))
    }))
  };
};
