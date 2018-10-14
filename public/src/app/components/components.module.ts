import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [RosterComponent, ProfileCardComponent, NavbarComponent],
  declarations: [RosterComponent, ProfileComponent, ProfilePicComponent, ProfileCardComponent, NavbarComponent]
})
export class ComponentsModule { }
