import { Component, OnInit, OnChanges, Directive, ElementRef, HostListener } from '@angular/core';
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
  startDate = new Date(1990, 0, 1);
  load: string;
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
      phone: [''],
      birth: [''],
      workload: ['', Validators.required],
      scholarity: ['']
    });
  }
  ngOnInit() {
  }
  inputChange(event) {
    console.log(event.key);
    if (event.key.match(/[^\d]+|^[0]+/ig)) {
      event.preventDefault();
      console.log(this.load);
      this.load = this.load.replace(/[^\d]+|^[0]+/ig, '');
    }
  }
  onSubmit(): void {
    this.colaborator = this.colaboratorForm.value;
    console.log(this.colaborator);
    this.save(this.colaborator);
  }
  private save(colaborator: Colaborator): void {
    this.colaboratorService.addColaborator(colaborator).subscribe(() => {console.log('cadastrdo'); });
  }
}
