import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppShellComponent } from './shared/layout/app-shell/app-shell.component';
import { AppRoutingModule, ROUTES } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SecureComponent } from './shared/layout/secure/secure.component';

@NgModule({
    declarations: [
        AppComponent,
        AppShellComponent,
        SecureComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule {}
