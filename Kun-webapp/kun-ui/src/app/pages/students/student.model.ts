import { Injectable } from '@angular/core';
import { Adapter } from '../../utils/Adapter'

export class Student {
    public status: string;

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public classId: number
    ) {
    }
}

export class StudentResponseModel {
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

export class StudentRequestAdabter implements Adapter<StudentResponseModel> {

    adapt(item: any): StudentResponseModel {
        return new StudentResponseModel(
            item.id,
            item.firstName,
            item.lastName,
            item.dateOfBirth,
            item.classId
        );
    }
}