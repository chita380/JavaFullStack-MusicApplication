import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {AuthService as AuthGuard} from './service/auth.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavMusicListComponent } from './fav-music-list/fav-music-list.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashBoardComponent,canActivate:[AuthGuard]},
  {path:'edit',component:EditProfileComponent},
  {path:'fav',component:FavMusicListComponent},
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
