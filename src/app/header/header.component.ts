import { Component, OnInit, Input } from '@angular/core';
import { ThemeService} from '../services/themeService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   title = 'Valerio Rossi';
  constructor(private readonly _themeService: ThemeService) { }

  ngOnInit(): void {
  }
  onThemeChange(event){
    console.log("changed");
    this._themeService.OnThemeSwitch.next(event.checked);
  }
}
