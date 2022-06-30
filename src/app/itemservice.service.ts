import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {


allItems = [
  { description: 'Program', done: false },
  { description: 'Work Out', done: false },

];


 public addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}

public remove(item:Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}


public duplicateItem(description: string) {
  this.allItems.push({
    description,
    done: false
  });


}
 
}