import { Component, OnInit, Output, Input } from '@angular/core';
import { Quiz } from '../../../../shared/quiz.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizManagerService } from '../../services/quiz-manager.service';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  courses = [
    { name: 'Angular', courseValue: 'Angular' },
    { name: 'Reactive', courseValue: 'React' }
  ];
  times: string[] = ['Hour', 'minutes'];
  quizes: Quiz;
  id: number;
  eidtMode = false;
  quizFrom: FormGroup;
  defaultImage = '../../assets/images/placeholder-image.png';
  defaultNumber: number;

  constructor(
    private quizManagerService: QuizManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // checking which mode editing or adding new one
      this.eidtMode = params['id'] != null;
      console.log(this.eidtMode);
      this.initForm();
    });
  }

  selectCourse(event: any) {
    this.selectCourse = event.target.value;
  }

  onAddQuiz(formData) {
    this.quizManagerService.addQuiz(formData);
    // console.log(formData);
    this.router.navigate(['/quiz-dashboard']);
  }

  private initForm() {
    let quizName = '';
    let quizImagePath = '';
    if (this.eidtMode) {
      const quiz = this.quizManagerService.getQuizID(this.id);
      quizName = quiz.name;
      quizImagePath = quiz.image;
    }
    this.quizFrom = new FormGroup({
      name: new FormControl(quizName, Validators.required),
      course: new FormControl(this.courses, Validators.required),
      image: new FormControl(quizImagePath)
    });
  }

  onSubmit() {
    const newQuiz = new Quiz(
      this.quizFrom.value['name'],
      this.quizFrom.value['course'],
      this.defaultImage,
      this.defaultNumber
    );
    // console.log(this.quizFrom);
    if (this.eidtMode) {
      this.quizManagerService.updateQuiz(this.id, newQuiz);
      this.router.navigate(['../instractour-dashboard']);
    } else {
      this.quizManagerService.addQuiz(newQuiz);
      this.router.navigate(['../instractour-dashboard']);
    }
  }

  onDeleteQuiz() {
    if (this.eidtMode) {
      if (confirm('are you sure you want to delete this quiz!?')) {
        this.quizManagerService.deleteQuiz(this.id);
      }
      this.router.navigate(['../instractour-dashboard']);
    }
  }

  onCancel() {
    this.router.navigate(['../instractour-dashboard']);
  }
}
