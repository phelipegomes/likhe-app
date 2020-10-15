import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentosComponent } from './tratamentos.component';

describe('TratamentosComponent', () => {
  let component: TratamentosComponent;
  let fixture: ComponentFixture<TratamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
