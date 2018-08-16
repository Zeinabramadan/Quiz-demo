import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../shared/quiz.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../../shared/question.model';
import { QuestionService } from '../../services/question.service';
import { QuizManagerService } from '../../services/quiz-manager.service';

@Component({
  selector: 'app-student-take-quiz',
  templateUrl: './student-take-quiz.component.html',
  styleUrls: ['./student-take-quiz.component.scss']
})
export class StudentTakeQuizComponent implements OnInit {
  quizes: Quiz[];
  id: number;
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute,
    private quizManagerService: QuizManagerService
  ) {}

  ngOnInit() {
    this.quizes = this.quizManagerService.getQuizes();
  }

  onTakeQuiz(i) {
    this.router.navigate([i, 'take-quiz-online'], { relativeTo: this.route });
  }
}
