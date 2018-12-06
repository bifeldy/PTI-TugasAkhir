import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanDetailComponent } from './pengumuman-detail.component';

describe('PengumumanDetailComponent', () => {
  let component: PengumumanDetailComponent;
  let fixture: ComponentFixture<PengumumanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengumumanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengumumanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
