import { Injectable } from '@angular/core';
import { Adapter } from '../../utils/Adapter'

export class Student {
    public status: string;

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: string,
        public classId: number
    ) {
    }
}

export class StudentRequestModel {
    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public date_of_birth: Date,
        public classes_id: number
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})

export class StudentResponseAdapter implements Adapter<Student> {

    adapt(item: any): Student {
        return new Student(
            item.id,
            item.first_name,
            item.last_name,
            item.date_of_birth,
            item.classes_id
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class StudentRequestAdabter implements Adapter<StudentRequestModel> {

    adapt(item: any): StudentRequestModel {
        return new StudentRequestModel(
            item.id,
            item.firstName,
            item.lastName,
            item.dateOfBirth,
            item.classId
        );
    }
}