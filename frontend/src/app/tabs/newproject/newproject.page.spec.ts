import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectPage } from './newproject.page';

describe('NewprojectPage', () => {
  let component: NewprojectPage;
  let fixture: ComponentFixture<NewprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprojectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
