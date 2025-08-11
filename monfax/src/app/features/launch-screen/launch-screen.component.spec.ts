import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LaunchScreenComponent } from './launch-screen.component';

describe('LaunchScreenComponent', () => {
  let component: LaunchScreenComponent;
  let fixture: ComponentFixture<LaunchScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LaunchScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
