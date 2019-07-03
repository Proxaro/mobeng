import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittodoPage } from './edittodo.page';

describe('EdittodoPage', () => {
  let component: EdittodoPage;
  let fixture: ComponentFixture<EdittodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
