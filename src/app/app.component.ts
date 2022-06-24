import { Component } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-list';


  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Program', done: true },
    { description: 'Work Out', done: true },
    { description: 'read with Maria', done: false },
    { description: 'Train with Ricky', done: false },
    { description: 'tell caroline i love her', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item:Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}