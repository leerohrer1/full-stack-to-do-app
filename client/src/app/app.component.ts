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
    { description: 'test1', done: true },
    { description: 'test2', done: false }
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

  deleteFromApp(item: Item) {
    return this.toDoItems = this.toDoItems.filter((filteredItem) => filteredItem.description !== item.description)
  }
}
