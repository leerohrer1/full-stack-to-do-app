import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {

item: Item = {description: 'test', done: false};

@Input() set _item (value: Item){
  this.item = value;
}

@Output() deleted = new EventEmitter<Item>();

@Output() edited = new EventEmitter<Item>();

deleteToDoItem(item: Item): void {
  this.deleted.emit(item);
}

editToDoItem(item: Item): void {
  this.edited.emit(item); 
}

}
