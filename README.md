# WorkshopAngular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Tasks
### Dependency Injection (DI) in Angular

### Creating a service
Command `ng g s services/Data`

### Creating a component
Command `ng g c components/data`

Remove everything in `app.component.html` reference data-component
Import Data component.

## Adding of Angular material
Command `ng add @angular/material`

Add the following in app.component import
```ts
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DataComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
```

html
```html
<mat-toolbar color="primary">
  <span>My Angular App</span>
</mat-toolbar>

<div style="text-align:center; margin-top:20px;">
  <button mat-raised-button color="accent">Click Me</button>
</div>
```

