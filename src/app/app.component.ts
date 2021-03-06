import { Component } from '@angular/core';
import { ThemeService} from './services/themeService.service';
import { slideInAnimation } from './route.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  
  private isDarkThemeActive:boolean;
  public myTheme: string;

  constructor(private readonly _sharedDataService: ThemeService) {    
    this._sharedDataService.OnThemeSwitch.subscribe( value => {
      if(value==true)
      {
          this.myTheme = "dark-theme";
      }
      else
      {
        this.myTheme = "light-theme";
      }
      this.isDarkThemeActive = value;
    });
  }
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
