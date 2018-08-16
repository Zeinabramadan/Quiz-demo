import { Injectable } from '@angular/core';
import { Quiz } from '../../../shared/quiz.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuizManagerService {
  private quizes: Quiz[] = [
    new Quiz(
      'Angular',
      'Web development',
      '../../assets/images/quiz-logo.png',
      2
    ),
    new Quiz('Vue', 'Web design', 'http://via.placeholder.com/200x150', 6),
    new Quiz('React', 'Front-end', 'http://via.placeholder.com/200x150', 8),
    new Quiz('Vue', 'Back-End', 'http://via.placeholder.com/200x150', 6)
  ];

  public newQuizSubject = new Subject<any>();
  constructor() {}

  getQuizes() {
    return this.quizes.slice();
  }

  addQuiz(quiz: Quiz) {
    quiz.image = '../../assets/images/placeholder-image.png';
    this.newQuizSubject.next(quiz);
    this.quizes.push(quiz);
  }

  updateQuiz(index: number, newQuiz: Quiz) {
    this.quizes[index] = newQuiz;
  }

  deleteQuiz(index: number) {
    this.quizes.splice(index, 1);
  }

  getQuizID(index: number) {
    return this.quizes[index];
  }
}
