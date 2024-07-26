import { Component } from '@angular/core';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor (public appData: AppComponent){}
}
