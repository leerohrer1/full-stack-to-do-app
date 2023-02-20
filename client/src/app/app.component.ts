import { Component } from '@angular/core';
import { Item } from './Item';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-client';

  toDoItems: Item[] = [
    { description: '1', done: true },
    { description: '12', done: false },
    { description: '123', done: true },
    { description: '1234', done: false },
    { description: '12345', done: false },
    { description: '123456', done: false }
  ];

  toDoItemsForm = this.formBuilder.group({
    item: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  addToDoItem() {
    this.toDoItems.push({
      description: this.toDoItemsForm.value.item,
      done: false
    });
  }

  editToDoItem(data: [Item, number]) {
    const [item, index] = data;
    return this.toDoItems[index] = item;
  }

  deleteFromApp(data: [Item, number]) {
    const [item, index] = data;
    return this.toDoItems.splice(index, 1);
  }
}
