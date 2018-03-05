import { Component, OnInit } from '@angular/core';
import { ColaboratorService } from '../shared/colaborator.service';
import { Colaborator } from '../shared/colaborator';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-colaborator-list',
  templateUrl: './colaborator-list.component.html',
  styleUrls: ['./colaborator-list.component.css']
})
export class ColaboratorListComponent implements OnInit {
  colaborators: Colaborator[];
  constructor(
    private colaboratorService: ColaboratorService
  ) { }

  ngOnInit() {
    this.collaboratorsInit();
  }
  collaboratorsInit(): void {
    this.colaboratorService.getColaborators().subscribe((cs) => this.colaborators = cs);
  }
  delete(colaborator: Colaborator): void {
    this.colaboratorService.deleteColaborator(colaborator).subscribe(() => this.colaborators = this.colaborators.filter(
      c => c._id !== colaborator._id
    ));
  }
}
