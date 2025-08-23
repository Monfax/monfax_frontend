import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonBordPage } from './mon-bord.page';

describe('MonBordPage', () => {
  let component: MonBordPage;
  let fixture: ComponentFixture<MonBordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonBordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
