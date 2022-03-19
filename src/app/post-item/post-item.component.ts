import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../database';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit{
  @Input() postTitle: string | undefined;  
  @Input() postContent: string | undefined; 
  @Input() postLoveIts: number =0; 
  @Input() postCreated_at: Date | undefined; 
  
  greencolor: boolean = (this.postLoveIts >0);
  redcolor: boolean = (this.postLoveIts <0);

  constructor() {    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLikeIt(){
    this.postLoveIts+=1;
  }

  onDislikeIt(){
    this.postLoveIts-=1;
  }

  getColor(): any{
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    } else{
      return 'black';
    }
  }

  

}
