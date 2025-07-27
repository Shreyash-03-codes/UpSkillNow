import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authenticate } from './authenticate';

describe('Authenticate', () => {
  let component: Authenticate;
  let fixture: ComponentFixture<Authenticate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authenticate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authenticate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
