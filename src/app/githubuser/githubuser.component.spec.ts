import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuserComponent } from './githubuser.component';

describe('GithubuserComponent', () => {
  let component: GithubuserComponent;
  let fixture: ComponentFixture<GithubuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
