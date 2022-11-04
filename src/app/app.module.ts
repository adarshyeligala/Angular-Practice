import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from 'src/color.directive';
import { AlphabetDirective, CustomDirective, NumberDirective } from 'src/custom.directive';
 

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    CustomDirective,
    NumberDirective,
    AlphabetDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
