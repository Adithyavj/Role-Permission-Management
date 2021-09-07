import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsGrantedDirective } from './_directives/is-granted.directive';
import { PermissionsComponent } from './permissions/permissions.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IsGrantedDirective,
    PermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbNav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
