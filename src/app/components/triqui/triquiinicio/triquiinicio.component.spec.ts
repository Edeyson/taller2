import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriquiinicioComponent } from './triquiinicio.component';

describe('TriquiinicioComponent', () => {
  let component: TriquiinicioComponent;
  let fixture: ComponentFixture<TriquiinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriquiinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriquiinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
