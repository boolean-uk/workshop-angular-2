import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  users: any[] = [];
  loading: boolean = true;

  constructor(private userService: DataService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching users', error);
        this.loading = false;
      }
    );
  }
  
}
