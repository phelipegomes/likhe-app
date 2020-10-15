import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejuvenescimentoComponent } from './rejuvenescimento.component';

describe('RejuvenescimentoComponent', () => {
  let component: RejuvenescimentoComponent;
  let fixture: ComponentFixture<RejuvenescimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejuvenescimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejuvenescimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
