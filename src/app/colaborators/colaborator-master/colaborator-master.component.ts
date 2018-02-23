import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Colaborator } from '../shared/colaborator';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-colaborator-master',
  templateUrl: './colaborator-master.component.html',
  styleUrls: ['./colaborator-master.component.css']
})
export class ColaboratorMasterComponent implements OnInit {
  collaborator: Colaborator;
  constructor() {}

  ngOnInit() {
  }
  getColaborator(id: number): Observable<Colaborator> {
    return 
  }
  onSubmit(): void {
  }
}
