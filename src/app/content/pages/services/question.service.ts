import { Injectable } from '@angular/core';
import { Question } from '../../../shared/question.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionService {
  public questions: Question[] = [
    new Question('The MVC architectural pattern', 'Checkbox', 20, 'answer 1'),
    new Question('Database Models', 'Textarea', 10, 'answer 2'),
    new Question('Database Access', 'input', 10, 'answer 3')
  ];

  public newSubjectQuestion = new Subject<any>();
  constructor() {}

  getQuestions() {
    return this.questions.slice();
  }

  addQuestion(question: Question) {
    this.newSubjectQuestion.next(question);
    console.log(question);
    this.questions.push(question);
  }
}
