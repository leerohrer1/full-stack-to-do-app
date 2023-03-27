import { Component, Input, OnInit } from '@angular/core';
import { Item } from './Item';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-do-client';

  toDoItems: Item[] = [];

  toDoItemsForm = this.formBuilder.group({
    item: '',
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:1234/list').subscribe((response: any) => {
      this.toDoItems = response;
    });
  }

  addToDoItem() {
    this.http
      .post('http://localhost:1234/add', {
        description: this.toDoItemsForm.value.item,
        done: false,
      })
      .subscribe((response) => {
        this.toDoItems.push({
          description: this.toDoItemsForm.value.item,
          done: false,
        });
        console.log('add', response);
      });
  }

  saveToDoItem(data: [Item, number]) {
    this.http
      .put('http://localhost:1234/edit', data)
      .subscribe((response: any) => {
        this.toDoItems = response;
        console.log('save', response);
      });
  }

  deleteFromApp(data: [Item, number]) {
    this.http
      .delete('http://localhost:1234/delete', { body: data })
      .subscribe((response: any) => {
        this.toDoItems = response;
        console.log('delete', response);
      });
  }
}
