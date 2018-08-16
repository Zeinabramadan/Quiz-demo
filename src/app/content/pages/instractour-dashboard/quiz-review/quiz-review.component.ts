import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../shared/quiz.model';
import { Question } from '../../../../shared/question.model';
import { QuestionService } from '../../services/question.service';
import { QuizManagerService } from '../../services/quiz-manager.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.scss']
})
export class QuizReviewComponent implements OnInit {
  quizes: Quiz;
  id: number;
  questions: Question[];
  constructor(
    private quizManagerService: QuizManagerService,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.quizes = this.quizManagerService.getQuizID(this.id);
    });
    this.questions = this.questionService.getQuestions();
  }
}
