import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoundownComponent } from './coundown.component';

describe('CoundownComponent', () => {
  let component: CoundownComponent;
  let fixture: ComponentFixture<CoundownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoundownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoundownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
