import { Component, OnInit, Input } from '@angular/core';
import { COMMENT, USER } from 'src/app/app.component';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  @Input() user:USER = {
    name:'loading',
    key:'not',
    image:{link:"",alt:"loading"}

  }
  @Input() comment:COMMENT ={
    text:'',
    key:'',
    votes:0,
    time:new Date(),
    replies:[],
    user :this.user
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
