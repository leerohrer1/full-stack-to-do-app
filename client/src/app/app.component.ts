import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-client';

  toDoItems: Item[] = [
    { description: 'test1', done: true },
    { description: 'test2', done: false }
  ];

  addToDoItem(description: string) {
    this.toDoItems.unshift({
      description,
      done: false
    });
  }

  deleteToDoItem(description: string) {
    this.toDoItems = this.toDoItems.filter((item) => item.description !== description);
  }
}
