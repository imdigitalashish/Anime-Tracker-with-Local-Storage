import { Component, OnInit } from '@angular/core';
import { MyAnimeService } from '../my-anime.service';

@Component({
  selector: 'app-my-anime-list',
  templateUrl: './my-anime-list.component.html',
  styleUrls: ['./my-anime-list.component.css']
})
export class MyAnimeListComponent implements OnInit {

  constructor(public myAnimeList: MyAnimeService) { }

  ngOnInit(): void {
    this.myAnimeList.getMyAnimeList();
  }

  incrementEpisode(index: any) {
    this.myAnimeList.myAnimeList[index].totalEpisodesWatched++;

    this.myAnimeList.saveCurrentState();
  }

  decrementEpisode(index: any) {
    this.myAnimeList.myAnimeList[index].totalEpisodesWatched--;
    this.myAnimeList.saveCurrentState();

  }

  deleteItem(index:any){
    this.myAnimeList.myAnimeList.splice(index, 1);
    this.myAnimeList.saveCurrentState();
  }

}
