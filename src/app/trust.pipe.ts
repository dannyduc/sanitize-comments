import { Pipe, PipeTransform } from "@angular/core";
import {
  DomSanitizer,
  SafeStyle,
  SafeResourceUrl,
  SafeScript,
  SafeHtml,
  SafeUrl
} from "@angular/platform-browser";

export type TrustPipeType = "html" | "style" | "script" | "url" | "resourceUrl";

@Pipe({
  name: "trust",
  pure: true
})
export class TrustPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(
    value: string,
    type: TrustPipeType
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "resourceUrl":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(
          `SafePipe unable to bypass security for invalid type: ${type}`
        );
    }
  }
}
