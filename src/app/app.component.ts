import { Component } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'OpenClassrooms';
  posts = posts;
}
