import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../shared/quiz.model';
import { Question } from '../../../../shared/question.model';
import { QuestionService } from '../../services/question.service';
import { QuizManagerService } from '../../services/quiz-manager.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-quiz-result',
  templateUrl: './student-quiz-result.component.html',
  styleUrls: ['./student-quiz-result.component.scss']
})
export class StudentQuizResultComponent implements OnInit {
  questions: Question[];
  quiz: Quiz;
  id: number;
  constructor(
    private quizManagerService: QuizManagerService,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.quiz = this.quizManagerService.getQuizes()[0];
  }
}
