import { Component, OnInit } from '@angular/core';
import { Question } from '../../../../shared/question.model';
import { QuestionService } from '../../services/question.service';
import { TakeQuizService } from '../../services/take-quiz.service';

@Component({
  selector: 'app-quiz-online',
  templateUrl: './quiz-online.component.html',
  styleUrls: ['./quiz-online.component.scss']
})
export class QuizOnlineComponent implements OnInit {
  mainQuestion: Question;
  questions: Question[];
  totalQ: number;
  passedQ = 1;
  wrongQ: number;
  correctQ: number;
  leftQ: number;
  constructor(
    private quistionService: QuestionService,
    private takeQuizService: TakeQuizService
  ) {}

  ngOnInit() {
    this.questions = this.quistionService.getQuestions();
    this.mainQuestion = new Question('First question', 'checkbox', 20, '');
    this.totalQ = this.takeQuizService.getTotalQuestion();
    this.leftQ = this.takeQuizService.getLeftQuestions();
  }
}
