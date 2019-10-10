import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesPageComponent } from './breweries-page.component';

describe('BreweriesPageComponent', () => {
  let component: BreweriesPageComponent;
  let fixture: ComponentFixture<BreweriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
