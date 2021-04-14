import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildADetailsComponent } from './child-a-details.component';

describe('ChildADetailsComponent', () => {
  let component: ChildADetailsComponent;
  let fixture: ComponentFixture<ChildADetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildADetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
