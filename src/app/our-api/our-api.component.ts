import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-our-api',
  templateUrl: './our-api.component.html',
  styleUrls: ['./our-api.component.css']
})
export class OurApiComponent {
  animeList:any

  constructor(private http : HttpService){
    this.http.getDataFromApi().subscribe((anime: any) =>{
      this.animeList = anime.data
      console.log(this.animeList)
    })
  }

  name:String = '';
}
