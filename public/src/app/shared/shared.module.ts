import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, InputComponent, CheckboxComponent],
  declarations: [ButtonComponent, InputComponent, CheckboxComponent]
})
export class SharedModule { }
