import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RilisanDetailComponent } from './rilisan-detail.component';

describe('RilisanDetailComponent', () => {
  let component: RilisanDetailComponent;
  let fixture: ComponentFixture<RilisanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RilisanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RilisanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
