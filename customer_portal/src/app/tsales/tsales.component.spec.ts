import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsalesComponent } from './tsales.component';

describe('TsalesComponent', () => {
  let component: TsalesComponent;
  let fixture: ComponentFixture<TsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
