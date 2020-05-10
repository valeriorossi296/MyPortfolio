import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  public OnThemeSwitch: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
}