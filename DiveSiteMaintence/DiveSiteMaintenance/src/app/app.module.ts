import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiveListComponent } from './dive-list/dive-list.component';
import { AddDiveComponent } from './add-dive/add-dive.component';
import { EditDiveComponent } from './edit-dive/edit-dive.component';
import { DeleteDiveComponent } from './delete-dive/delete-dive.component';

import { SiteManagementService } from './site-management.service';

@NgModule({
  declarations: [
    AppComponent,
    DiveListComponent,
    AddDiveComponent,
    EditDiveComponent,
    DeleteDiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SiteManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
