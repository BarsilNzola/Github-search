import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubreposComponent } from './githubrepos.component';

describe('GithubreposComponent', () => {
  let component: GithubreposComponent;
  let fixture: ComponentFixture<GithubreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
