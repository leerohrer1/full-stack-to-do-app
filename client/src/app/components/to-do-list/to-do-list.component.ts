import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  inputToDoItems: Item[] = [];

  @Input() set _toDoItems (value: Item[]) {
    this.inputToDoItems = value;
  }

}
