import { Component, Input } from '@angular/core';
import { ItemserviceService } from './itemservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemserviceService]
})


export class AppComponent {
  title = 'my-list';

  filter: 'all' | 'active' | 'done' = 'all';
 constructor (public ItemserviceService: ItemserviceService){
  
 }
 
 
  get items() {
    if (this.filter === 'all') {
      return this.ItemserviceService.allItems;
    }
    return this.ItemserviceService.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
 

}