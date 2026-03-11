import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioComponente } from './mio.componente';

describe('MioComponente', () => {
  let component: MioComponente;
  let fixture: ComponentFixture<MioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MioComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(MioComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
