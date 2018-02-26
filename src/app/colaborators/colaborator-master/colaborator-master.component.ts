import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

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
  constructor(
    private colaboratorService: ColaboratorService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.colaboratorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      birth: ['', Validators.required],
      workload: ['', Validators.required],
      scholarity: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit(): void {
    this.colaborator = this.colaboratorForm.value;
    console.log(this.colaborator);
  }
}
