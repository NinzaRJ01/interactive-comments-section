import { Injectable } from '@angular/core';
import { COMMENT,USER } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private dataUser :USER[] =[{
    name : 'amyrobson',
    key : 'not',
    image :{
      link : 'https://github.com/arshWebDev/interactive-comments-section/blob/master/src/Assets/avatars/image-amyrobson.png?raw=true',
      alt:'amyrobson-profile'
    }    
  },
  {
    name : 'juliusomo',
    key:'root',
    image :{
      link :'https://github.com/arshWebDev/interactive-comments-section/blob/master/src/Assets/avatars/image-juliusomo.png?raw=true',
      alt :'juliusomo-profile'
    }
  },
  {
    name :'maxblagun',
    key:'not',
    image :{
      link :'https://github.com/arshWebDev/interactive-comments-section/blob/master/src/Assets/avatars/image-maxblagun.png?raw=true',
      alt:'maxblagun-profile'
    }
  },
  {
    name :'ramsesmiron',
    key:'not',
    image :{
      link :'https://github.com/arshWebDev/interactive-comments-section/blob/master/src/Assets/avatars/image-ramsesmiron.png?raw=true',
      alt:'ramsesmiron-profile'
    }
  }
  ]
  private dataComment:COMMENT[] =[
    {
      text:`Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
      votes:13,
      time : new Date(),
      replies:[], 
      user:this.dataUser[0]
    },
    {
      text:`Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
      votes:5,
      time:new Date(),
      user:this.dataUser[2],
      replies:[
            {
              key:'maxblaugn',
              text:`If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
              votes:4,
              user:this.dataUser[3],
              time: new Date(),
            },
            {
              key:'ramsesmiron',
              text:`I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`,
              votes : 2,
              user: this.dataUser[1],
              time : new Date(),
            }
      ],
      
    },{
      text:'@juliusomo g',
      votes:0,
      user:this.dataUser[1],
      time:new Date(),

    }
  ]
  getAllComment = ()=>{return [...this.dataComment];}
  getComment = (index:number):COMMENT=>{
    if(index<this.dataComment.length)
      return {...this.dataComment[index]};
    throw Error();
  }
  getLen = () => this.dataComment.length;
  constructor() { }
}
