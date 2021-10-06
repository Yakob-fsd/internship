import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http:HttpClient) { }

  upload(body:any){
    return this._http.post('http://127.0.0.1:3000/uploads/upload',body,{
      observe : 'body',
      headers : new HttpHeaders().append('Content-type','application/json')
    });
  }

  getVideos(){
    return this._http.get('http://127.0.0.1:3000/uploads/videos')
  }

}
