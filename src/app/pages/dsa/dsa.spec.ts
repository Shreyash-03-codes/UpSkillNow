import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dsa } from './dsa';

describe('Dsa', () => {
  let component: Dsa;
  let fixture: ComponentFixture<Dsa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dsa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dsa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
