import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiveLogComponent } from './dive-log/dive-log.component';
import { ContentFilterPipe } from './content-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiveLogComponent,
    ContentFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
