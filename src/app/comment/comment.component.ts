import { Component, OnInit } from "@angular/core";
import { Comment } from "./comment";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  comment: Comment = {
    author: "Danny",
    created: new Date(),
    note:
      '<a href="//attacker.com">Link</a>\n' +
      "\n" +
      "NormalText\n" +
      "\n" +
      '<a href=javascript:alert("0wned")>JSLink</a>\n' +
      "\n" +
      "<b>BoldText</b>"
  };

  constructor() {}

  ngOnInit(): void {}
}
