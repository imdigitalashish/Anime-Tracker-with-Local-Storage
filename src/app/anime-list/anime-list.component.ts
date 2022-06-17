import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimeService } from '../anime.service';
import { MyAnimeService } from '../my-anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor(public animeService: AnimeService, private myAnimeList: MyAnimeService) { }


  searchAnime = new FormControl("");

  ngOnInit(): void {

    this.animeService.searchAnime("Naruto");
  }


  addToList(index: any) {
    this.myAnimeList.addAnimeToLocalStorage(this.animeService.animeList[index]);
  }


  @HostListener("keydown", ["$event"])
  keyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.animeService.searchAnime(this.searchAnime.value);
    }
  }

}
