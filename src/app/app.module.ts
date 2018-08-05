import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DataDrivenComponent} from './data-driven/data-driven.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
