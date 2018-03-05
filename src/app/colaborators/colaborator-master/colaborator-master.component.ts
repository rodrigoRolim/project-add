import { Component, OnInit, OnChanges, Directive, ElementRef, HostListener } from '@angular/core';
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
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router, ParamMap } from '@angular/router';

import { Colaborator } from '../shared/colaborator';
import { ColaboratorService } from '../shared/colaborator.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-colaborator-master',
  templateUrl: './colaborator-master.component.html',
  styleUrls: ['./colaborator-master.component.css']
})
export class ColaboratorMasterComponent implements OnInit {
  colaborator: Colaborator;
  colaboratorForm: FormGroup;
  startDate = new Date(1990, 0, 1);
  load: string;
  constructor(
    private colaboratorService: ColaboratorService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.colaboratorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      birth: [''],
      workload: [this.load, Validators.required],
      scholarity: ['']
    });
    console.log(this.load);
  }
  ngOnInit() {
   console.log(this.colaboratorForm);
  }
  inputChange(n): void {
    this.load = n.value;
    // console.log(event.key);
    // if (event.key.match(/[^\d]+|^[0]+/ig)) {
    //   event.preventDefault();
    //   console.log(this.load);
    //   this.load = this.load.replace(/[^\d]+|^[0]+/ig, '');
    // }
  }
  // getEmail(email: any): void {
  //   console.log(this.colaboratorForm.controls.email.hasError('required'));
  //   console.log(this.colaboratorForm.controls.email.value);
  //   /[a-z\d]+(\@)[a-z\d]+/.test(this.colaboratorForm.controls.email.value);
  // }
  getErrorMessage() {
    return this.colaboratorForm.controls.email.hasError('required') ? 'Email é obrigatório' :
    (/[a-z\d]+[\@][a-z\d]+/g.test(this.colaboratorForm.controls.email.value)) ? 'email inválido' : '';
  }
  onSubmit(): void {
    this.colaborator = this.colaboratorForm.value;
    console.log(this.colaborator);
    this.save(this.colaborator);
  }
  private save(colaborator: Colaborator): void {
    this.colaboratorService.addColaborator(colaborator).subscribe(() => { this.gotoColaborator(); });
  }
  gotoColaborator(): void {
    this.router.navigate(['/colaborators']);
  }
  goBack(): void {
    this.location.back();
  }
}
