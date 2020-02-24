import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendAppComponent } from './backend-app.component';

describe('BackendAppComponent', () => {
  let component: BackendAppComponent;
  let fixture: ComponentFixture<BackendAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
