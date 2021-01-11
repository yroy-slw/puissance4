import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModeService } from '../../common/services/colorMode.service';
import FunctionalRules from '../../common/functionalRules';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  public navLabels = FunctionalRules;
  title = 'connect4';
  public $isDarkMode: Observable<boolean>;
  
  constructor(
    private colorModeService: ColorModeService,
  ) {}

  ngOnInit(): void {
  }

  public toggleDarkMode(checked: boolean): void {
    this.colorModeService.setDarkMode(checked);
  }
}
