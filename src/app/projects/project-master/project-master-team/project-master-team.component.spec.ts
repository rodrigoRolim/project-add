import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMasterTeamComponent } from './project-master-team.component';

describe('ProjectMasterTeamComponent', () => {
  let component: ProjectMasterTeamComponent;
  let fixture: ComponentFixture<ProjectMasterTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMasterTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMasterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
