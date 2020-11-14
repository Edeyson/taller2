import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriquiplaymodalComponent } from './triquiplaymodal.component';

describe('TriquiplaymodalComponent', () => {
  let component: TriquiplaymodalComponent;
  let fixture: ComponentFixture<TriquiplaymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriquiplaymodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriquiplaymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
