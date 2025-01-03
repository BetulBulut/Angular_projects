import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-todo',
  imports:[CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  isDisplay=false;
  message = "";

  constructor() { }

  model = new Model();


  addItem(value: string) {
    if(value!="") {
      this.model.items.push({ description: value, action: false });
    } else {
      alert("bilgi giriniz");
    }
  }


  getName() {
    return this.model.name;
  }



  getItems() {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(i=> !i.action);
  }
 

}