import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './shared/back.service';
import { NewComponent } from './components/new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(BackendService),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
