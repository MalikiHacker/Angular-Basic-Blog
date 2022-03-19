import { Component, OnInit } from '@angular/core';
import { posts } from '../database';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts = posts;

  constructor() { }

  
  ngOnInit(): void {
  }

  
}
