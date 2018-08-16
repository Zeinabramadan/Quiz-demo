import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../../../../shared/quiz.model';
import { QuizManagerService } from '../../services/quiz-manager.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz-manager.component.html',
  styleUrls: ['./quiz-manager.component.scss']
})
export class QuizManagerComponent implements OnInit {
  quizes: Quiz[];
  constructor(
    private quizManagerService: QuizManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quizes = this.quizManagerService.getQuizes();
    this.quizManagerService.newQuizSubject.subscribe(quiz => {
      this.quizes.push(quiz);
      console.log(quiz);
    });
  }

  onNewQuiz() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onEditQuiz(i) {
    console.log(i);
    this.router.navigate([i, 'edit'], { relativeTo: this.route });
  }

  onReviewQuiz(i) {
    console.log(i);
    this.router.navigate([i, 'review'], { relativeTo: this.route });
  }
}
