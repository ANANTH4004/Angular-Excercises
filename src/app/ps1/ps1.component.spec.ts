import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1Component } from './ps1.component';

describe('Ps1Component', () => {
  let component: Ps1Component;
  let fixture: ComponentFixture<Ps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
