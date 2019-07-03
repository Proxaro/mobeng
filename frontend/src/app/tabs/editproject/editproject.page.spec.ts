import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectPage } from './editproject.page';

describe('EditprojectPage', () => {
  let component: EditprojectPage;
  let fixture: ComponentFixture<EditprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprojectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
