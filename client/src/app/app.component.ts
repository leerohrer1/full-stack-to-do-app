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
      console.log(response);
      this.toDoItems = response;
    });
  }

  addToDoItem() {
    this.http
      .post<Item>('http://localhost:1234/add', {
        description: this.toDoItemsForm.value.item,
        done: false,
      })
      .subscribe((response) => {
        if (response) {
          this.toDoItems.push({
            description: this.toDoItemsForm.value.item,
            done: false,
            id: response.id,
          });
          console.log('add', response);
        } else {
          //alert? snack bar? dialog?
          console.log('error');
        }
      });
  }

  saveToDoItem(data: Item) {
    this.http.put('http://localhost:1234/edit', data).subscribe(() => {
      this.toDoItems.map((item) => (item.id === data.id ? data : item));
      console.log('save', this.toDoItems);
    });
  }

  deleteFromApp(data: Item) {
    this.http
      .delete('http://localhost:1234/delete', { body: data })
      .subscribe(() => {
        this.toDoItems.filter((item) => item.id !== data.id);
        console.log('delete', this.toDoItems);
      });
    this.http.get('http://localhost:1234/list').subscribe((response: any) => {
      console.log('data retrieved for display');
      this.toDoItems = response;
    });
  }
}
