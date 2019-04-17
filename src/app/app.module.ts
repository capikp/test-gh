import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LineComponent } from './line/line.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LineComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
