import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgModel } from '@angular/forms';
import { ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
  SelectMultipleControlValueAccessor
  } from '@angular/forms';

import { ProjectService } from '../shared/project.service';
import { Colaborator } from '../../colaborators/shared/colaborator';
import { Project } from '../shared/project';
@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.css']
})
export class ProjectMasterComponent implements OnInit {

  @ViewChild('btnclick') click: HTMLButtonElement;

  collaborators: Colaborator[];
  projects: Project;
  prop: Project[] = [];
  teamList: {name?: string}[] = [];
  team: {member: any, timeSpend: any}[];
  selected: Colaborator[] = [];
  selectedBoss = '';
  start = new FormControl('', Validators.required);
  end = new FormControl('', Validators.required);
  projectForm = new FormGroup({
    teams         : new FormControl(this.team),
    boss          : new FormControl('', Validators.required),
    name          : new FormControl('', Validators.required),
    description   : new FormControl('', Validators.required),
    start         : this.start,
    end           : this.end,
  });
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit() {
    this.getColaborators();
    this.getProjects();
  }
  getProjects(): void {
    this.projectService.getProjects().subscribe(projetos => {
      projetos.map((p, i) => this.prop[i] = p);
    });
  }
  verifiyDateProject(d: Date): boolean {
    const proBoss: Project[] = [];
    let result: boolean;
    this.prop.forEach((p, i) => (p.boss === this.projectForm.value.boss) ? proBoss[i] = p : '');
    proBoss.forEach(pb =>
      (moment(pb.start) <= moment(d) && moment(pb.end) >= moment(d)) ? result = true : ''
    );
    return result;
  }
  myFilterStart = (d: Date): boolean => {
    const day = d.getDay();
    const momentB = moment(d, 'DD/MM/YYYY');
    return day !== 0 && day !== 6 && !this.verifiyDateProject(d);
  }
  myFilterEnd = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6 && this.verifyDateProjectEnd(d);
  }
  verifyDateProjectEnd(d: Date): boolean {
    const result = this.prop.find(p =>
      p.boss === this.projectForm.value.boss && moment(p.start) > moment(this.projectForm.value.start)
    );
    if (!result) {
      return true;
    } else {
      return moment(this.projectForm.value.start) <= moment(d) && moment(d) < moment(result.start);
    }
  }
  getColaborators(): void {
    this.projectService.getColaborators()
    .subscribe(cs => {
      this.collaborators = cs;
      cs.map((c, i: number) => this.teamList.push(c));
    });
  }
  onSubmit(f: NgForm): void {
    this.projectForm.value.start = moment(this.projectForm.value.start).format('L');
    this.projectForm.value.end = moment(this.projectForm.value.end).format('L');
    // this.projectForm.value.teams = this.team;
    this.projects = this.projectForm.value;
    console.log(this.projects);
     this.save(this.projects);
  }
  private save(project: Project): void {
    this.projectService.addProject(project).subscribe(() => this.gotoProject());
  }
  gotoProject(): void {
    this.router.navigate(['/projects']);
  }
}
