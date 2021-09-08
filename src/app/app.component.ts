import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allItems = [
    { description: 'Item 1', isDone: true },
    { description: 'Item 2', isDone: false },
    { description: 'Item 3', isDone: true },
    { description: 'Item 4', isDone: false },
  ];

  title = 'to-do-list';

  addItem(description: string) {
    this.allItems.unshift({
      description: description, isDone: false
    });
  }
}
