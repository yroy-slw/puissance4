import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModeService } from '../../common/services/colorMode.service';
// import { Store } from '@ngxs/store';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
