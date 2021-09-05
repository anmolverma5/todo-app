import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: any;
  constructor(public service: TodoService) {}

  ngOnInit(): void {
    this.service.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
