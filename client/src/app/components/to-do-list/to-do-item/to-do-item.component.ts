import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  item: Item = { description: 'initializer', done: false, id: 0 };
  itemFormGroup: FormGroup = {} as FormGroup;

  @Input() set _item(value: Item) {
    this.item = value;
  }

  @Output() deleted = new EventEmitter<Item>();

  @Output() saved = new EventEmitter<Item>();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.itemFormGroup = this.formBuilder.group(
      {
        descriptionControl: this.item.description,
        doneControl: this.item.done
      }
    );
  }

  deleteToDoItem(): void {
    this.deleted.emit(this.item);
  }

  saveToDoItem(formValue: any): void {
    this.item.description = formValue.descriptionControl;
    this.item.done = formValue.doneControl;
    this.saved.emit(this.item);
  }
}
