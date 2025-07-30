import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthCardComponent } from './components/auth-card/auth-card';
import { InputComponent } from './components/input/input';

@NgModule({
  declarations: [
    AuthCardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthCardComponent,
    InputComponent
  ]
})
export class SharedModule { }