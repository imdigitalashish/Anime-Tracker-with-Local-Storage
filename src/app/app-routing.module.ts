import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MyAnimeListComponent } from './my-anime-list/my-anime-list.component';

const routes: Routes = [
  {path: "", component: AnimeListComponent},
  {path: "myAnimeList", component: MyAnimeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
