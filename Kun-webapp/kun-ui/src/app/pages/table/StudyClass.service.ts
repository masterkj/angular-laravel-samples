
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyClass, StudyClassAdapter } from './studyClass.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
            map((data: any[]) => data.classes.map(item => this.adapter.adapt(item))),
        );
    }
}