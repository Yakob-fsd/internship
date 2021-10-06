import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload.service';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    UserhomeComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [UserService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
