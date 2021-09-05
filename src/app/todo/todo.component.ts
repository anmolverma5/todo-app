import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../shared/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  message: any;
  constructor(public service: TodoService) {
    console.log('TODO COMPONENT chalpda');
  }
  completeTask(itemId: any) {
    this.service.toggleTodoStatus(itemId);
  }
  ngOnInit(): void {
    this.service.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
