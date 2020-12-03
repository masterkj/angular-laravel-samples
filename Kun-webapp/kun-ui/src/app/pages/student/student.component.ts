import { Component, OnInit } from '@angular/core';
import { StudentService } from "./student.service";
import { Student } from './student.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'student-cmp',
    templateUrl: 'student.component.html'
})


export class StudentComponent implements OnInit {

    public studentObject: Student

    public students: Student[];
    public studentTableHeaders = ['First name', 'Last name', 'DOB'];

    constructor(private studentService: StudentService, private modalService: NgbModal) {
        this.students = [];
    }
    ngOnInit() {
        this.studentService.list().subscribe((students: Student[]) => {
            this.students = students;
        });
        this.studentObject = new Student(null, '', '', '', null)
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        });
    }

    save() {
        this.studentService.save(this.studentObject).subscribe((student: Student) => {
            this.students.push(student);
            this.modalService.dismissAll()
            this.cleanStudentObject()
        })
    }

    delete(deletedStudet: Student) {
        this.studentService.delete(deletedStudet).subscribe((student: Student) => {
            this.students = this.students.filter(e => e != deletedStudet)
        })
    }

    cleanStudentObject() {
        this.studentObject = new Student(null, '', '', '', null)
    }

}