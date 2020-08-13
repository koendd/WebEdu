import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlhomeComponent } from './htmlhome.component';

describe('HtmlhomeComponent', () => {
  let component: HtmlhomeComponent;
  let fixture: ComponentFixture<HtmlhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
