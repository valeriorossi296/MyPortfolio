import { Component, OnInit } from '@angular/core';
import { PictureCard } from '../../models/card';
import { PictureCardService } from '../../services/card.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-picture-card-list',
  templateUrl: './picture-card-list.component.html',
  styleUrls: ['./picture-card-list.component.scss']
})
export class PictureCardListComponent implements OnInit {
  
  pictureCards: Array<PictureCard>;

  constructor(private pictureCardService: PictureCardService) { }

  ngOnInit(): void {
    this.pictureCardService.getAllCards().subscribe(p => this.pictureCards = p);
  }

}
