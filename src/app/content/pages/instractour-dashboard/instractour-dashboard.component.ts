import { Component, OnInit } from '@angular/core';
import { BreadCrumbSrvice } from '../../../components/breadcrumb/bread.service';

@Component({
  selector: 'app-instractour-dashboard',
  templateUrl: './instractour-dashboard.component.html',
  styleUrls: ['./instractour-dashboard.component.scss']
})
export class InsractourDashboardComponent implements OnInit {
  public breadActive = 'Quiz Manager';
  constructor(public breadCrumbSrvice: BreadCrumbSrvice) {}

  ngOnInit() {
    this.breadCrumbSrvice.breadTtile = this.breadActive;
  }
}
