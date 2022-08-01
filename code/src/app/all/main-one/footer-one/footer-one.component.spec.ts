import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOneComponent } from './footer-one.component';

describe('FooterOneComponent', () => {
  let component: FooterOneComponent;
  let fixture: ComponentFixture<FooterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
