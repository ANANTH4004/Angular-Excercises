import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCalciComponent } from './crypto-calci.component';

describe('CryptoCalciComponent', () => {
  let component: CryptoCalciComponent;
  let fixture: ComponentFixture<CryptoCalciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCalciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoCalciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
