import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsBlockComponent } from './components/results-block/results-block.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { MatButtonModule } from '@angular/material/button';
import { StyleDirectivDirective } from 'src/app/directives/style-directiv.directive';
import { SortingInputPipe } from 'src/app/pipes/sorting-input.pipe';
import { SortingDatePipe } from 'src/app/pipes/sorting-date.pipe';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { RouterModule } from '@angular/router';
import { ResolveImgUrlPipe } from 'src/app/pipes/resolve-img-url.pipe';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    ResultsBlockComponent,
    SearchItemComponent,
    StyleDirectivDirective,
    SortingInputPipe,
    SortingDatePipe,
    DetailsPageComponent,
    ResolveImgUrlPipe,
    VideoPlayerComponent,
  ],
  imports: [CommonModule, MatButtonModule, RouterModule, YouTubePlayerModule],
  exports: [MatButtonModule],
})
export class ResultsBlockModule {}
