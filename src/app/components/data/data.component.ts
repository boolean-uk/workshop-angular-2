import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  @Input() arr:string[] = []


  @Input() stringParam:string = ''
  constructor(){}

  ngOnInit(){
    console.log('I am created!')
  }
}
