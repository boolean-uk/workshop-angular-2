import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { DataComponent } from '../../components/data/data.component';


@NgModule({
  declarations: [IndexComponent,DataComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[MatListModule]
})
export class UserModule { }
