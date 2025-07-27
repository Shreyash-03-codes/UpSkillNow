import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopment } from './web-development';

describe('WebDevelopment', () => {
  let component: WebDevelopment;
  let fixture: ComponentFixture<WebDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
