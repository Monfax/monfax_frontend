import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroSlidesComponent } from './intro-slides.component';

describe('IntroSlidesComponent', () => {
  let component: IntroSlidesComponent;
  let fixture: ComponentFixture<IntroSlidesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IntroSlidesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
