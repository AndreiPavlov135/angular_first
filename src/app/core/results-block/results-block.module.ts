import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsBlockComponent } from './components/results-block/results-block.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { MatButtonModule } from '@angular/material/button';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ResultsBlockComponent,
    SearchItemComponent,
    DetailsPageComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    YouTubePlayerModule,
    SharedModule,
  ],
  exports: [MatButtonModule],
})
export class ResultsBlockModule {}
