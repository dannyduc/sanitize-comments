import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appExternalLink]'
})
export class ExternalLinkDirective {

  @HostListener('click', ['$event'])
  onClick(event) {
    event.preventDefault();
 }

  constructor() { }

}