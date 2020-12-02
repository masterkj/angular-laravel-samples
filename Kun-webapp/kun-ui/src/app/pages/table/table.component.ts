import { Component, OnInit } from '@angular/core';
import { StudyClassService } from "./StudyClass.service";
import { StudyClass } from './studyClass.model';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    public studyClasses: StudyClass[];
    public studyClassTableHeader = ['Name', 'Code', 'Maximum students', 'Status', 'Description'];

    constructor(private studyClassService: StudyClassService) {
        this.studyClasses = [];
    }
    ngOnInit() {
        this.studyClassService.list().subscribe((studyClasses: StudyClass[]) => {
            this.studyClasses = studyClasses;
        });
    }

}
