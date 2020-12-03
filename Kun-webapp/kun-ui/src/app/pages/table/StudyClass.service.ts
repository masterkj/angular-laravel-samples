
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyClass, StudyClassAdapter } from './studyClass.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface StudyClassResponse {
    classes: any[],
    message: string
}

@Injectable({
    providedIn: 'root'
})

export class StudyClassService {

    private baseUrl: string = 'http://localhost:8000/api/';
    private apiUrl: string = this.baseUrl + 'class'

    constructor(private http: HttpClient, private adapter: StudyClassAdapter,
    ) { }

    list(): Observable<StudyClass[]> {
        return this.http.get(this.apiUrl).pipe(
            // Adapt each item in the raw data array
            map((data: StudyClassResponse) => data.classes.map(item => this.adapter.adapt(item))),
        );
    }

    save(studyClassObject: StudyClass): Observable<StudyClass> {
        return this.http.post(this.apiUrl, studyClassObject).pipe(
            // Adapt each item in the raw data array
            map((data: any) => this.adapter.adapt(data.class)),
        );
    }

    delete(studyClassObject: StudyClass): Observable<any> {
        return this.http.delete(this.apiUrl + `/${studyClassObject.id}`).pipe(
        );
    }
}