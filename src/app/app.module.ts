import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CommentComponent } from "./comment/comment.component";
import { SanitizePipe } from "./sanitize.pipe";
import { TrustPipe } from "./trust.pipe";
import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CommentComponent, SanitizePipe, TrustPipe, ExternalLinkDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
