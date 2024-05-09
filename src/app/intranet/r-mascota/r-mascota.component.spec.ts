import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMascotaComponent } from './r-mascota.component';

describe('RMascotaComponent', () => {
  let component: RMascotaComponent;
  let fixture: ComponentFixture<RMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RMascotaComponent]
    });
    fixture = TestBed.createComponent(RMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
