import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';

import { ProjectService } from '../shared/project.service';
import { Colaborator } from '../../colaborators/shared/colaborator';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
  } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Project } from '../shared/project';
@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.css']
})
export class ProjectMasterComponent implements OnInit {

  collaborators: Colaborator[];
  projects: Project;
  teamList: {}[] = [];
  teams = new FormControl();
  start = new FormControl({value: '', disabled: true});
  end = new FormControl({value: '', disabled: true});
  objetoTeam: {member: any, timeSpend: any}[] = [];
  selected: string[];
  projectForm = new FormGroup({
    teams: this.teams,
    collaborator: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    start: this.start,
    end: this.end,
  });
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.getColaborators();
    console.log(this.projectForm.value);
  }
  myFilterStart = (d: Date): boolean => {
    const day = d.getDay();
    // const dateA = new Date('1998-05-28');
    // const start = moment(new Date('2018-02-10'), 'DD/MM/YYYY');
    // const end = moment(new Date('2018-02-18'), 'DD/MM/YYYY');
    // Prevent Saturday and Sunday from being selected.
    // const momentA = moment(dateA, 'DD/MM/YYYY');
    // const momentB = moment(d, 'DD/MM/YYYY');
    // console.log(momentB.diff(momentA, 'hours'));
    // if (this.start.value === this.end.value) {
    //   this.end = new FormControl({value: '', disabled: true});
    //   this.projectForm.value.end = '';
    // }
    return day !== 0 && day !== 6 /*!(momentB > start && momentB < end)/*!(momentB.diff(momentA, 'hours') === 3)*/;
  }
  myFilterEnd = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6 /*&& d > startDate*/;
  }
  getColaborators(): void {
    this.projectService.getColaborators()
    .subscribe(cs => {
      this.collaborators = cs;
      console.log(this.collaborators);
      cs.map((c, i: number) => this.teamList.push(c));
    });
    console.log(this.teamList);
  }
  onSubmit(): void {
    this.projectForm.value.start = moment(this.projectForm.value.start).format('L');
    this.projectForm.value.end = moment(this.projectForm.value.end).format('L');
    // this.projectForm.value.teams.forEach(element => {
    //   const x = {name: element};
    //   this.objetoTeam.push(x);
    // });
    this.projectForm.value.teams = this.objetoTeam;
    this.projects = this.projectForm.value;
    console.log(this.objetoTeam);
    console.log(this.projects);
    this.save(this.projects);
    console.log(this.selected);
  }
  private save(project: Project): void {
    this.projectService.addProject(project).subscribe(() => {console.log('cadastrado com sucesso'); });
  }
  getHora(hora: any, s: any): void {
    const x = {member: s, timeSpend: hora};
    this.objetoTeam.push(x);
    console.log(s);
    console.log(hora);
  }
}
