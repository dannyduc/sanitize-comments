import { Pipe, PipeTransform } from "@angular/core";
import linkfyStr from "linkifyjs/html";

@Pipe({
  name: "linkify"
})
export class LinkifyPipe implements PipeTransform {
  transform(str: string): string {    
    return str
      ? linkfyStr(str, {
          attributes: {
            rel: "noopener nofollow noreferrer"
          }
        })
      : str;
  }  
}
