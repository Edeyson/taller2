import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadjuegosComponent } from './cantidadjuegos.component';

describe('CantidadjuegosComponent', () => {
  let component: CantidadjuegosComponent;
  let fixture: ComponentFixture<CantidadjuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadjuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
