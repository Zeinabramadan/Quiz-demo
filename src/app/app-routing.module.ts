import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { AddQuizComponent } from './content/pages/instractour-dashboard/add-quiz/add-quiz.component';
import { QuizManagerComponent } from './content/pages/instractour-dashboard/quiz-manager/quiz-manager.component';
import { QuizReviewComponent } from './content/pages/instractour-dashboard/quiz-review/quiz-review.component';
import { InsractourDashboardComponent } from './content/pages/instractour-dashboard/instractour-dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { StudentDashboardComponent } from './content/pages/student-dashboard/student-dashboard.component';
import { StudentQuizResultComponent } from './content/pages/student-dashboard/student-quiz-result/student-quiz-result.component';
import { StudentTakeQuizComponent } from './content/pages/student-dashboard/student-take-quiz/student-take-quiz.component';
import { QuizOnlineComponent } from './content/pages/student-dashboard/quiz-online/quiz-online.component';
const AppRoutes: Routes = [
  { path: '', redirectTo: '/main-dashboard', pathMatch: 'full' },
  { path: 'main-dashboard', component: MainDashboardComponent },
  {
    path: 'instractour-dashboard',
    canActivate: [AuthGuard],
    component: InsractourDashboardComponent,
    children: [
      { path: '', component: QuizManagerComponent },
      { path: 'add', component: AddQuizComponent },
      { path: ':id', component: QuizReviewComponent },
      { path: ':id/edit', component: AddQuizComponent },
      { path: ':id/review', component: QuizReviewComponent }
    ]
  },
  {
    path: 'student-dashboard',
    // canActivate: [AuthGuard],
    component: StudentDashboardComponent,
    children: [
      { path: '', component: StudentTakeQuizComponent },
      { path: ':id/take-quiz-online', component: QuizOnlineComponent },
      { path: 'quiz-result', component: StudentQuizResultComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
