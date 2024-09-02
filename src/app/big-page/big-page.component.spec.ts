import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPageComponent } from './big-page.component';

describe('BigPageComponent', () => {
  let component: BigPageComponent;
  let fixture: ComponentFixture<BigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
