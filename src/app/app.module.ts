import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HslaInputComponent } from './hsla-input/hsla-input.component';
import { BlendModeInputComponent } from './blend-mode-input/blend-mode-input.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, ReactiveFormsModule ],
  declarations: [ 
    AppComponent,  
    HslaInputComponent, BlendModeInputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
