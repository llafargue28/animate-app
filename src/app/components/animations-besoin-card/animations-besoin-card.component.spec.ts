import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationsBesoinCardComponent } from './animations-besoin-card.component';

describe('AnimationsBesoinCardComponent', () => {
  let component: AnimationsBesoinCardComponent;
  let fixture: ComponentFixture<AnimationsBesoinCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsBesoinCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsBesoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
