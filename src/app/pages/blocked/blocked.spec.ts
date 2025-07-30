import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocked } from './blocked';

describe('Blocked', () => {
  let component: Blocked;
  let fixture: ComponentFixture<Blocked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blocked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blocked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
