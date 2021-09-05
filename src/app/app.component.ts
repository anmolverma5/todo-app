import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any = [];
  name = '';
  constructor(private id: TodoService) {}
  parentComponent(data: any) {
    console.warn(data);
    this.name = data;
  }
  ngOnInit() {}
}
