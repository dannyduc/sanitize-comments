import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sanitize"
})
export class SanitizePipe implements PipeTransform {
  transform(value: string): string {
    const div = document.createElement("div");
    div.innerHTML = value.trim();
    const elements = div.getElementsByTagName("a");
    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    return div.innerHTML;
  }
}
