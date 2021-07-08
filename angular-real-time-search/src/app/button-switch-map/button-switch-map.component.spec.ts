import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSwitchMapComponent } from './button-switch-map.component';

describe('ButtonSwitchMapComponent', () => {
  let component: ButtonSwitchMapComponent;
  let fixture: ComponentFixture<ButtonSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSwitchMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
