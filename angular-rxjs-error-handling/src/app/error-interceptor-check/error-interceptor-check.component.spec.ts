import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInterceptorCheckComponent } from './error-interceptor-check.component';

describe('ErrorInterceptorCheckComponent', () => {
  let component: ErrorInterceptorCheckComponent;
  let fixture: ComponentFixture<ErrorInterceptorCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInterceptorCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInterceptorCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
