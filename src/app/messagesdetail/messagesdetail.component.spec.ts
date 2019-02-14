import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesdetailComponent } from './messagesdetail.component';

describe('MessagesdetailComponent', () => {
  let component: MessagesdetailComponent;
  let fixture: ComponentFixture<MessagesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
