import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { ColorModeService } from './common/services/colorMode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public $isDarkMode: Observable<boolean>;

  constructor(
    private colorModeService: ColorModeService
  ) {}

  public ngOnInit() {
    this.$isDarkMode = this.colorModeService.isDarkMode;
  }
}
