import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppGameComponent } from './app-game.component';

describe('AppGameComponent', () => {
  let component: AppGameComponent;
  let fixture: ComponentFixture<AppGameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
