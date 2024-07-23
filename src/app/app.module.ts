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
import { SharedModule } from './shared/shared.module';
import { AppShellComponent } from './shared/layout/app-shell/app-shell.component';

@NgModule({
    declarations: [
        AppComponent,
        DataComponent,
        AppShellComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
        SharedModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}
