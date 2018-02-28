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
@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.css']
})
export class ProjectMasterComponent implements OnInit {
  collaborators: Colaborator[];
  projectForm: FormGroup;
  // collaborator = new FormControl('');
  // name = new FormControl('');
  // description = new FormControl('');
  // start = new FormControl('');
  // end = new FormControl('');
  teans = new FormControl();
  teamList = [];
  // projectForm = new FormGroup({
  //   teans: new FormControl(''),
  //   collaborator: new FormControl(),
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   start: new FormControl(''),
  //   end: new FormControl(''),
  // });
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.getColaborators();
    // console.log(this.collaborators);
    // this.collaborators.map((element, index) => {
    //   console.log(element);
    //   //this.toppingList[index] = element.name;
    // });
    console.log(this.projectForm.value);
  }
  createForm() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      team: [''],
      collaborator: [''],
      description: [''],
      start: ['', Validators.required],
      end: ['']
    });
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    const dateA = new Date('1998-05-28');
    const start = moment(new Date('2018-02-10'), 'DD/MM/YYYY');
    const end = moment(new Date('2018-02-18'), 'DD/MM/YYYY');
    // Prevent Saturday and Sunday from being selected.
    const momentA = moment(dateA, 'DD/MM/YYYY');
    const momentB = moment(d, 'DD/MM/YYYY');
    console.log(momentB.diff(momentA, 'hours'));
    return day !== 0 && day !== 6 && !(momentB > start && momentB < end)/*!(momentB.diff(momentA, 'hours') === 3)*/;
  }
  getColaborators(): void {
    this.projectService.getColaborators()
    .subscribe(cs => {
      this.collaborators = cs;
      cs.map((c, i: number) =>  this.teamList[i] = c.name);
    });
  }
}
