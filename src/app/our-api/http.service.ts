import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getDataFromApi(){
    return this.http.get(`https://api.jikan.moe/v4/anime?q=&sfw`)
  }
  searchAnime(name:string){
    return this.http.get(`https://api.jikan.moe/v4/anime?q=${name}&sfw`)

  }
}
