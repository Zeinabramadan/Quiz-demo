import { Component, OnInit } from '@angular/core';
import { BreadCrumbSrvice } from './bread.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor(public breadCrumbSrvice: BreadCrumbSrvice) {}
  breadTtile: string;
  ngOnInit() {
    this.breadTtile = this.breadCrumbSrvice.getValue();
  }
}
