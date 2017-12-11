import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmtextboxComponent } from './rmtextbox.component';

describe('RmtextboxComponent', () => {
  let component: RmtextboxComponent;
  let fixture: ComponentFixture<RmtextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmtextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
