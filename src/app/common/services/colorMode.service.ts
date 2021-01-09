import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { setColorMode } from '../store/action/colorMode.action';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  private $colorMode: Subject<boolean> = new Subject<boolean>();
  public isDarkMode = this.$colorMode.asObservable();

  constructor(
    private store: Store
  ) {}

  public setDarkMode(isDarkMode: boolean) {
    this.$colorMode.next(isDarkMode);
    this.store.dispatch(new setColorMode({ isDarkMode: isDarkMode }));
  }
}
