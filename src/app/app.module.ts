import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataComponent } from './components/data/data.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        DataComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
