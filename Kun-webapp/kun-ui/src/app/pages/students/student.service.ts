
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, StudentRequestAdabter, StudentResponseAdapter } from './student.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface StudentWholeResponse {
    students: Student[],
    message: string
}

@Injectable({
    providedIn: 'root'
})

export class StudyClassService {

    private baseUrl: string = 'http://localhost:8000/api/';
    private apiUrl: string = this.baseUrl + 'student'

    constructor(private http: HttpClient,
        private responseAdapter: StudentResponseAdapter,
        private requestAdapter: StudentRequestAdabter
    ) { }

    list(): Observable<Student[]> {
        return this.http.get(this.apiUrl).pipe(
            // Adapt each item in the raw data array
            map((data: StudentWholeResponse) => data.students.map(item => this.responseAdapter.adapt(item))),
        );
    }

    save(studentObject: Student): Observable<Student> {
        return this.http.post(this.apiUrl, this.requestAdapter.adapt(studentObject)).pipe(
            // Adapt each item in the raw data array
            map((data: any) => this.responseAdapter.adapt(data.class)),
        );
    }

    delete(studentObject: Student): Observable<any> {
        return this.http.delete(this.apiUrl + `/${studentObject.id}`).pipe(
        );
    }
}