import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamnComponent } from './damn.component';

describe('DamnComponent', () => {
  let component: DamnComponent;
  let fixture: ComponentFixture<DamnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
