import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';

// directives
import { DropdownDirective } from './shared/dropdown.directive';
import { ContentComponent } from './content/content.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { QuizManagerComponent } from './content/pages/instractour-dashboard/quiz-manager/quiz-manager.component';
import { AddQuizComponent } from './content/pages/instractour-dashboard/add-quiz/add-quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { UiSwitchModule } from 'angular2-ui-switch';
import { QuizManagerService } from './content/pages/services/quiz-manager.service';
import { QuestionComponent } from './content/pages/instractour-dashboard/add-quiz/questions/question/question.component';
import { QuestionService } from './content/pages/services/question.service';
import { QuizReviewComponent } from './content/pages/instractour-dashboard/quiz-review/quiz-review.component';
import { InsractourDashboardComponent } from './content/pages/instractour-dashboard/instractour-dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { StudentDashboardComponent } from './content/pages/student-dashboard/student-dashboard.component';
import { BreadCrumbSrvice } from './components/breadcrumb/bread.service';
import { StudentQuizResultComponent } from './content/pages/student-dashboard/student-quiz-result/student-quiz-result.component';
import { StudentTakeQuizComponent } from './content/pages/student-dashboard/student-take-quiz/student-take-quiz.component';
import { TakeQuizService } from './content/pages/services/take-quiz.service';
import { QuizOnlineComponent } from './content/pages/student-dashboard/quiz-online/quiz-online.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    DropdownDirective,
    ContentComponent,
    BreadcrumbComponent,
    QuizManagerComponent,
    AddQuizComponent,
    QuestionComponent,
    QuizReviewComponent,
    InsractourDashboardComponent,
    SideBarComponent,
    MainDashboardComponent,
    StudentDashboardComponent,
    StudentQuizResultComponent,
    StudentTakeQuizComponent,
    QuizOnlineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule
  ],
  providers: [
    QuizManagerService,
    QuestionService,
    AuthGuard,
    AuthService,
    BreadCrumbSrvice,
    TakeQuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
