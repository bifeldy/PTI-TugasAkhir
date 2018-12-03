import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RilisanComponent } from './rilisan.component';

describe('RilisanComponent', () => {
  let component: RilisanComponent;
  let fixture: ComponentFixture<RilisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RilisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RilisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
