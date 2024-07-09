import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items:string[] = ['Allen John','Mark','Elliot']
  
  surnames:string[] = ['De Wilzin','Essex','Williams']
  userArr:any[] = [{
    name: 'AJ',
    age: 19
  },
  {
    name: 'John',
    age: 22
  }]
  constructor() { }

  getUserNames(){
    return this.items;
  }
}
