import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [UserComponent, UserDataComponent, UsersListComponent],
  imports: [
    CommonModule,
    HttpModule,
    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
