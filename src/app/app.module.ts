import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebexWidgetComponent } from './webex-widget/webex-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WebexWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
