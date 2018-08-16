import { Component, OnInit, Output } from '@angular/core';
import { BreadCrumbSrvice } from '../../../components/breadcrumb/bread.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  breadActive = 'Student Dashboard';
  constructor(public breadCrumbSrvice: BreadCrumbSrvice) {}

  ngOnInit() {
    this.breadCrumbSrvice.breadTtile = this.breadActive;
  }
}
