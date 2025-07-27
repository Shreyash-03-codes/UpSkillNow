import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aiml } from './aiml';

describe('Aiml', () => {
  let component: Aiml;
  let fixture: ComponentFixture<Aiml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aiml]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aiml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
