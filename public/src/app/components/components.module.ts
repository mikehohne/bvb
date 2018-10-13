import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [RosterComponent],
  declarations: [RosterComponent, ProfileComponent]
})
export class ComponentsModule { }
