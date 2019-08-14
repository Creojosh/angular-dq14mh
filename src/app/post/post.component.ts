import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLike: number;

  constructor() { 
    this.postDate=new Date();
  }

  ngOnInit() {
  }

  up(){
    this.postLike++;
  }

  down(){
    this.postLike--;
  }

}