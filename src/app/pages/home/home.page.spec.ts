import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router=TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should go to besoins-animation on voir tout',(){
    spyOn(router,'navigate');
    component.gotoanimations;
    expect(router.navigate).toHaveBeenCalledWith(['besoins-animation']);
  } )

  it('should go to besoin-animation on créer une animation',(){
    spyOn(router,'navigate');
    component.newanimation;
    expect(router.navigate).toHaveBeenCalledWith(['besoin-animation']);
  } )
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
