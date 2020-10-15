import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AClinicaComponent } from './a-clinica.component';

describe('AClinicaComponent', () => {
  let component: AClinicaComponent;
  let fixture: ComponentFixture<AClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
