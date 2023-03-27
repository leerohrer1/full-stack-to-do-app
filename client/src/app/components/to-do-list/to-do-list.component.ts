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

  @Output() deleted = new EventEmitter<[Item, number]>();

  @Output() saved = new EventEmitter<[Item, number]>();


  deleteFromToDoList(item: Item, index: number): void {
    this.deleted.emit([item, index]);
  }

  saveItemOnToDoList(item: Item, index: number): void {
    this.saved.emit([item, index]);
  }
}
