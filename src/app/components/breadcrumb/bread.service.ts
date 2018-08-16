import { Injectable } from '@angular/core';

@Injectable()
export class BreadCrumbSrvice {
  breadTtile: string;
  getValue() {
    return this.breadTtile;
  }
}
