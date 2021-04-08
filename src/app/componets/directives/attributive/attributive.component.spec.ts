import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributiveComponent } from './attributive.component';

describe('AttributiveComponent', () => {
  let component: AttributiveComponent;
  let fixture: ComponentFixture<AttributiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
