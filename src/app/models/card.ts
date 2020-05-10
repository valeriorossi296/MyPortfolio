
import { SafeStyle } from '@angular/platform-browser';

/* tslint:disable */
export interface PictureCard {
  id?: string;
  name?: string;
  author?: string;
  description?: string;
  technique?: string;
  size?: string;
  year?: string;
  category?: string;
  imageUrl?: string;
  imageStyle?: SafeStyle;
  enabled?: boolean;
}
