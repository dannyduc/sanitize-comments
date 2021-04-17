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
      '<script>alert("0wned")</script>\n' +
      '<a href="https://attacker.com">ExternalLink</a>\n' +
      "NormalText\n" +
      '<a href=javascript:alert("0wned")>JSLink</a>\n' +
      "<b>BoldText</>"
  };

  constructor() {}

  ngOnInit(): void {}
}
