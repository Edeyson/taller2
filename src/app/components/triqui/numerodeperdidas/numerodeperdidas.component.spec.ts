import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerodeperdidasComponent } from './numerodeperdidas.component';

describe('NumerodeperdidasComponent', () => {
  let component: NumerodeperdidasComponent;
  let fixture: ComponentFixture<NumerodeperdidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerodeperdidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerodeperdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
