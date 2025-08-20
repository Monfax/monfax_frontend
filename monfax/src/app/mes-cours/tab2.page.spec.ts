import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';



import { MesCoursPage } from './mes-cours.page';

describe('Tab2Page', () => {
  let component: MesCoursPage;
  let fixture: ComponentFixture<MesCoursPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesCoursPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
