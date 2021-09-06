import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatAll, filter, map, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Todo } from '../model/todo.module';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  messageSource = new BehaviorSubject<any>('Total Work TODO=>');
  currentMessage = this.messageSource.asObservable();
  todoitemscount: any;
  data: Todo[] = [];
  todoItems = new BehaviorSubject<Todo[]>([]);
  todoItemsList$ = this.todoItems.asObservable();
  completed: any;
  constructor(private apiService: ApiService) {
    console.log('Service Chalpadi');
    this.todoItems;
    this.getData()
      .pipe(
        map((res: any) =>
          res.map((data: any) => {
            return {
              completed: data.completed !== data.completed,
              id: data.id,
              title: data.title,
            };
          })
        )
      )
      .subscribe((data: any) => {
        console.warn(data);
        this.data = data;
        this.todoItems.next(data);
        this.todoitemscount = this.data.length;
        //console.warn(this.todoitemscount);
      });
  }
  getData(params = {}) {
    return this.apiService.getApiCall(environment.TODO_API, params);
  }
  get countOfCompletedItems() {
    return this.data.filter((data: { completed: any }) => !data.completed)
      .length;
  }
  public toggleTodoStatus(itemId: number) {
    const todoItem = this.data.find((item) => item.id === itemId);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
    this.todoItems.next(this.data);
  }
  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
