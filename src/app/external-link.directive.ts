import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appExternalLink]"
})
export class ExternalLinkDirective {
  @HostListener("click", ["$event"])
  onClick(event) {
    try {
      const url = new URL(event.target.href);
      if (url.hostname != location.hostname) {
        event.preventDefault();
      }
    } catch (err) {}
  }

  constructor() {}
}
