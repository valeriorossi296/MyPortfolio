import { Component, OnInit, Input } from '@angular/core';
import { PictureCard } from '../models/card';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {


  @Input() pictureCard: PictureCard

  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.pictureCard.imageStyle = this.sanitizer.bypassSecurityTrustStyle(`url(${this.pictureCard.imageUrl})`);
  }

}
