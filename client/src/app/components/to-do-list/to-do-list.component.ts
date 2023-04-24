import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'src/app/Item';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  inputToDoItems: Item[] = [];

  @Input() set _toDoItems(value: Item[]) {
    this.inputToDoItems = value;
  }

  @Output() deleted = new EventEmitter<Item>();

  @Output() saved = new EventEmitter<Item>();


  deleteFromToDoList(item: Item): void {
    this.deleted.emit(item);
  }

  saveItemOnToDoList(item: Item): void {
    this.saved.emit(item);
  }
}
