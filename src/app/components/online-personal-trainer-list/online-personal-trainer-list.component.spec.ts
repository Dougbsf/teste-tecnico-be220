import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlinePersonalTrainerListComponent } from './online-personal-trainer-list.component';

describe('OnlinePersonalTrainerListComponent', () => {
  let component: OnlinePersonalTrainerListComponent;
  let fixture: ComponentFixture<OnlinePersonalTrainerListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePersonalTrainerListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlinePersonalTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
