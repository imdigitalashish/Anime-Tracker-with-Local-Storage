import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SingleAnime } from './models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private httpService: HttpClient) { }


  animeList: SingleAnime[] = [];



  searchAnime(searchQuery: any) {

    this.httpService.get(`${environment.serverUrl}${searchQuery}`).subscribe((res: any) => {
      if (res["data"][0] != undefined) {

        this.animeList = res["data"];

      } else {
        alert("No such Anime Found");
      }
      console.log(this.animeList[0]);
    })

  }


}
