import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, EventEmitter, Output, Input } from '@angular/core';

import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnChanges {
  @Input() busca: string;
  @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
  projectsBusca: Observable<Project[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();
  projects: Project[];
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectsInit();
    console.log(this.projects);

    // this.projectsBusca =  this.termosDaBusca
    // .debounceTime(300)
    // .distinctUntilChanged()
    // .switchMap(term => term ? this.projectService.search(term) : of<Project[]>([]))
    // .catch(err => {
    //     console.log(err);
    //     return of<Project[]>([]);
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const busca: SimpleChange = changes['busca'];
    console.log(busca);
    this.search(busca.currentValue);
}
  projectsInit(): void {
    this.projectService.getProjects().subscribe(ps => {
      this.projects = ps;
      console.log(ps);
    });
  }
  search(termo: string): void {
    console.log(termo);
    this.termosDaBusca.next(termo);
    this.buscaChange.emit(termo);
}
}
