import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-player',
  template: '<youtube-player videoId="{{ id }}"></youtube-player>',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  public id!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(map((params) => (this.id = params.id))).subscribe();

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
