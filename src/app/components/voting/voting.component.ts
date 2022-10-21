import { Component, Input, OnInit } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  @Input() votes:number = 0;
  @Input() key:string = '';
  private flag = false;
  constructor() { }
  upVote = async (key:string)=>{
    if(!this.flag){
      ++this.votes;
      this.flag = !this.flag;
       //send key to verify and record vote, then return true
     setTimeout(()=>console.log("Update SuccessFully"),1000);
    }
  }
  downVote = async (key:string) =>{
    if(this.flag){
      --this.votes;
      this.flag = !this.flag;
    }
    
  }

  ngOnInit(): void {

  }

}
