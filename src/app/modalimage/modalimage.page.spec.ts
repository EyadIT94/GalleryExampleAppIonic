import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalimagePage } from './modalimage.page';

describe('ModalimagePage', () => {
  let component: ModalimagePage;
  let fixture: ComponentFixture<ModalimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalimagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
