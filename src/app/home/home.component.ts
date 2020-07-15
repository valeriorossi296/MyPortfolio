import { Component, OnInit } from '@angular/core';
import { PictureCard } from '../models/card';
import { PictureCardService } from '../services/card.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  pictureCards: Array<PictureCard>;

  constructor(
    private pictureCardService: PictureCardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.pictureCardService.getAllCards().subscribe(p => this.pictureCards = p);
   
  }
  navigatePicture()
  {
    this.router.navigate(['pictures']);
  }
  navigateFurniture()
  {
    this.router.navigate(['furnitures']);
  }
  
}
