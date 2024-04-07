import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersAppComponent } from './github-users-app.component';

describe('GithubUsersAppComponent', () => {
  let component: GithubUsersAppComponent;
  let fixture: ComponentFixture<GithubUsersAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubUsersAppComponent]
    });
    fixture = TestBed.createComponent(GithubUsersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
