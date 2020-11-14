import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriquiplayComponent } from './triquiplay.component';

describe('TriquiplayComponent', () => {
  let component: TriquiplayComponent;
  let fixture: ComponentFixture<TriquiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriquiplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriquiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
