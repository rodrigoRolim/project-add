import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-colaborator-master',
  templateUrl: './colaborator-master.component.html',
  styleUrls: ['./colaborator-master.component.css']
})
export class ColaboratorMasterComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({});
  }

  ngOnInit() {
  }
  onSubmit(): void {

  }
}
