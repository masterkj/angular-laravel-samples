import { Component, OnInit } from '@angular/core';
import { StudyClassService } from "./StudyClass.service";
import { StudyClass } from './studyClass.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'table-cmp',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    closeResult = '';
    public studyClassObject: StudyClass

    public studyClasses: StudyClass[];
    public studyClassTableHeader = ['Name', 'Code', 'Maximum students', 'Status', 'Description'];

    constructor(private studyClassService: StudyClassService, private modalService: NgbModal) {
        this.studyClasses = [];
    }
    ngOnInit() {
        this.studyClassService.list().subscribe((studyClasses: StudyClass[]) => {
            this.studyClasses = studyClasses;
        });
        this.studyClassObject = new StudyClass(0, '', '', new Date(), 10, true, '')
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        });
    }

    save() {
        this.studyClassService.save(this.studyClassObject).subscribe((studyClass: StudyClass) => {
            this.studyClasses.push(studyClass);
            this.modalService.dismissAll()
            this.cleanStudyClassObject()
        })
    }

    delete(deletedStudyClass: StudyClass) {
        this.studyClassService.delete(deletedStudyClass).subscribe((studyClass: StudyClass) => {
            this.studyClasses = this.studyClasses.filter(e => e != deletedStudyClass)
        })
    }

    cleanStudyClassObject() {
        this.studyClassObject = new StudyClass(0, '', '', new Date(), 10, true, '')
    }

}
