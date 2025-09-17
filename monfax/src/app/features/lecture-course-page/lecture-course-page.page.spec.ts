import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectureCoursePagePage } from './lecture-course-page.page';

describe('LectureCoursePagePage', () => {
  let component: LectureCoursePagePage;
  let fixture: ComponentFixture<LectureCoursePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCoursePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
