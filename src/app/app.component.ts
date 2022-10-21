import { Component } from '@angular/core';
import { CommentService } from './services/comment.service';

export interface Image {
  link : string,
  alt:string,
}
export interface USER {
  name:string,
  key:'root'| 'not',
  image:Image,

}
export interface COMMENT{
  text:string,
  key?:string,
  replies? : COMMENT[],
  votes : number,
  time: Date
  user:USER

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  len = this.cs.getLen();
  comments:COMMENT[] = this.cs.getAllComment();
  constructor(private cs:CommentService){}
  
}
