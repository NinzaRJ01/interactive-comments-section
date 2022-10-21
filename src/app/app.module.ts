import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { VotingComponent } from './components/voting/voting.component';
import { InputFooterComponent } from './components/input-footer/input-footer.component';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent,
    VotingComponent,
    InputFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
