import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../upload.service';
import { UserService } from '../user.service';


@Component({
  selector: 'install-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm:FormGroup = new FormGroup({
    videoname : new FormControl(null,Validators.required),
    tagline : new FormControl(null,Validators.required),
    location : new FormControl(null,Validators.required),
    genre : new FormControl(null,Validators.required),
    description : new FormControl(null,Validators.required),
    thumbUrl : new FormControl(null,Validators.required),
    videoUrl : new FormControl(null,Validators.required)
  })

  username:String='';

  constructor(private _router:Router,private _uploadService:UploadService,private _user : UserService) { 
    this._user.user()
    .subscribe(
      data => this.addName(data),
      error => this._router.navigate(['/login'])
    )
  }

  ngOnInit(): void {
  }

  upload(){
    if(!this.uploadForm.valid){
      console.log('Invalid Form');
      return;
    }
    this._uploadService.upload(JSON.stringify(this.uploadForm.value))
    .subscribe(
      data => {console.log(data); this._router.navigate(['/home']);},
      error => console.error(error) 
    )
    //console.log(JSON.stringify(this.registerForm.value));
  }

  addName(data:any){
    this.username=data.firstname;
  }

  logout(){
    this._user.logout()
    .subscribe(
      data => {console.log(data);this._router.navigate(['/login'])},
      error => console.error(error)
    )
  }

}
