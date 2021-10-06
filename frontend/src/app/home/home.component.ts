import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'install-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor(private _upload : UploadService) { }

  ngOnInit(): void {
    this._upload.getVideos().subscribe((data)=>{
      this.videos = JSON.parse(JSON.stringify(data));
    })
  }

}
