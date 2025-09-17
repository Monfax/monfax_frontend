import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModePage } from './dark-mode.page';

describe('DarkModePage', () => {
  let component: DarkModePage;
  let fixture: ComponentFixture<DarkModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
