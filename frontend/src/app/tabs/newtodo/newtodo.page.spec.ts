import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtodoPage } from './newtodo.page';

describe('NewtodoPage', () => {
  let component: NewtodoPage;
  let fixture: ComponentFixture<NewtodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
