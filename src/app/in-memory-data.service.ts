import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
     const movies=[
        {id:1,name:'movie 1',description:"nice movie",imageUrl:"assets/img/1.jpeg"},
        {id:2,name:'movie 2',description:"nice movie",imageUrl:"assets/img/2.jpeg"},
        {id:3,name:'movie 3',description:"nice movie",imageUrl:"assets/img/3.jpeg"},
        {id:4,name:'movie 4',description:"nice movie",imageUrl:"assets/img/4.jpeg"},
        {id:5,name:'movie 5',description:"nice movie",imageUrl:"assets/img/5.jpeg"},
        {id:6,name:'movie 6',description:"nice movie",imageUrl:"assets/img/6.jpeg"},
        {id:7,name:'movie 7',description:"nice movie",imageUrl:"assets/img/7.jpeg"}
    ];
    return{movies};
  }
  
  constructor() { }
}
