import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KesalahanComponent } from './kesalahan.component';

describe('KesalahanComponent', () => {
  let component: KesalahanComponent;
  let fixture: ComponentFixture<KesalahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KesalahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KesalahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
