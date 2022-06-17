import { Injectable } from '@angular/core';
import { SingleAnime } from './models/anime';

@Injectable({
  providedIn: 'root'
})
export class MyAnimeService {

  constructor() { }


  myAnimeList: SingleAnime[] = [];

  addAnimeToLocalStorage(animeItem: SingleAnime) {
    animeItem.totalEpisodesWatched = 0;
    this.myAnimeList.unshift(animeItem);
    localStorage.setItem("list", JSON.stringify(this.myAnimeList))
    alert("Anime Added Successfully");
  }

  saveCurrentState() {
    localStorage.setItem('list', JSON.stringify(this.myAnimeList));
  }

  getMyAnimeList() {
    if (localStorage.getItem("list") != null) {
      this.myAnimeList = JSON.parse(localStorage.getItem("list") || '{}');
    }
  }
}
