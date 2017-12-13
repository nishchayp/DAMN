import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestsComponent } from './access-requests.component';

describe('AccessRequestsComponent', () => {
  let component: AccessRequestsComponent;
  let fixture: ComponentFixture<AccessRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
