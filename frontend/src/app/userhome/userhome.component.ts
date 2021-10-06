import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'install-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username:String='';

  videos = [{
    _id : '',
    videoname : '',
    tagline : '',
    location : '',
    genre : '',
    description : '',
    thumbUrl : '',
    videoUrl : '',
    creation_dt : ''
  }]
  

  constructor(private _user : UserService,private _router:Router,private _upload : UploadService) {
    this._user.user()
    .subscribe(
      data => this.addName(data),
      error => this._router.navigate(['/login'])
    )

   }

  ngOnInit(): void {

    this._upload.getVideos().subscribe((data)=>{
      this.videos = JSON.parse(JSON.stringify(data));
    })

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
