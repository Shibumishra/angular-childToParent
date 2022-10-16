import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartentComponent } from './components/partent/partent.component';
import { ChilldComponent } from './components/chilld/chilld.component';
import { EvenPipe } from './pipe/even.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PartentComponent,
    ChilldComponent,
    EvenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
