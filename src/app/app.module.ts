import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RmtextboxComponent } from './rm-controls/rmtextbox/rmtextbox.component';


@NgModule({
  declarations: [
    AppComponent,
    RmtextboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
