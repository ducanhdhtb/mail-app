import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesChildComponent } from './messages-child.component';

describe('MessagesChildComponent', () => {
  let component: MessagesChildComponent;
  let fixture: ComponentFixture<MessagesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
