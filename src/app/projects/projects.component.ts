import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { Colaborator } from '../colaborators/shared/colaborator';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    constructor( ) { }

    ngOnInit() {

    }

}
