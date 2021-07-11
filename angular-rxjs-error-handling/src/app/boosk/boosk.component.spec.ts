import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooskComponent } from './boosk.component';

describe('BooskComponent', () => {
  let component: BooskComponent;
  let fixture: ComponentFixture<BooskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
