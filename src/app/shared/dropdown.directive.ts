import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private _el: ElementRef) {}
  @HostBinding('class.show') isShown = false;

  @HostListener('click')
  toggleOpen() {
    this.isShown = !this.isShown;
    this._el.nativeElement
      .querySelector('.dropdown-menu')
      .classList.toggle('show');
  }
}
