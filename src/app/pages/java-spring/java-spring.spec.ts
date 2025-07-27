import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpring } from './java-spring';

describe('JavaSpring', () => {
  let component: JavaSpring;
  let fixture: ComponentFixture<JavaSpring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaSpring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaSpring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
