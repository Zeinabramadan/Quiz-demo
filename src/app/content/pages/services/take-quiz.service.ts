import { Injectable } from '@angular/core';
import { Quiz } from '../../../shared/quiz.model';
import { Question } from '../../../shared/question.model';
import { QuestionService } from '../services/question.service';
import { Router } from '@angular/router';

@Injectable()
export class TakeQuizService {
  totalQuestions: number;
  passedQuestion = 1;
  wrongQuestions: number;
  correctQuestions: number;
  leftQuestions: number;
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}

  takequiz() {
    this.router.navigate(['../instractour-dashboard']);
  }

  getTotalQuestion() {
    return (this.totalQuestions = this.questionService.questions.length);
  }

  getLeftQuestions() {
    return (this.totalQuestions =
      this.questionService.questions.length - this.passedQuestion);
  }
}
