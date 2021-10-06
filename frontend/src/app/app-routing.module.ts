import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'upload',component : UploadComponent},
  {path : 'user' ,component:UserhomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'contact', component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
