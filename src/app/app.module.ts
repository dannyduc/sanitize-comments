import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CommentComponent } from "./comment/comment.component";
import { SanitizePipe } from "./sanitize.pipe";
import { SafePipe } from "./safe.pipe";
import { ExternalLinkDirective } from "./external-link.directive";
import { LinkifyPipe } from "./linkify.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CommentComponent,
    SanitizePipe,
    SafePipe,
    ExternalLinkDirective,
    LinkifyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
