import { Component, OnInit } from '@angular/core';
import { Question } from '../../../../../../shared/question.model';
import { QuestionService } from '../../../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  questionTypes: string[] = ['Checkbox', 'Textarea', 'input', 'Radio'];
  show = false;

  btns = {
    'btn-success': true,
    'btn-danger': false
  };

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  showAddQueSection() {
    this.show = !this.show;
    if (this.show === true) {
      this.btns = {
        'btn-success': false,
        'btn-danger': true
      };
    } else {
      this.btns = {
        'btn-success': true,
        'btn-danger': false
      };
    }
  }

  onAddQuestion(formData) {
    this.questionService.addQuestion(formData);
    this.questions.push(formData);
    this.show = false;
    this.btns = {
      'btn-success': true,
      'btn-danger': false
    };
  }
}
