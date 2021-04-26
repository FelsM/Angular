import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServerComponent } from './client-server.component';

describe('ClientServerComponent', () => {
  let component: ClientServerComponent;
  let fixture: ComponentFixture<ClientServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
