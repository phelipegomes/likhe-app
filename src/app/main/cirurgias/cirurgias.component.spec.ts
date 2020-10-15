import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirurgiasComponent } from './cirurgias.component';

describe('CirurgiasComponent', () => {
  let component: CirurgiasComponent;
  let fixture: ComponentFixture<CirurgiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirurgiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
