import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [MatListModule],
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
