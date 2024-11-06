import { Component } from '@angular/core';
import { IUser } from '../../../../model/users';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  array:string[] = ['AJ','John','Ilia','Roahn']
  user: IUser = {
    id:12,
    name:'AJ',
    age: 29,
  };

  constructor(){

  }
}
