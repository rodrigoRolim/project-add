import { Component, OnInit, Input, Output } from '@angular/core';
import { Colaborator } from '../../../colaborators/shared/colaborator';
import { Project } from '../../shared/project';
import {
  FormGroup,
  RequiredValidator,
  Validators,
  FormGroupDirective,
  NgForm,
  SelectMultipleControlValueAccessor
  } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-project-master-team',
  templateUrl: './project-master-team.component.html',
  styleUrls: ['./project-master-team.component.css']
})
export class ProjectMasterTeamComponent implements OnInit {

  constructor() { }
  @Input() selected: Colaborator[] = [];
  @Input() projeto: Project;

  ngOnInit() {
    console.log(this.projeto);
  }
  cliquei(): void {
    console.log(this.projeto);
  }
}
