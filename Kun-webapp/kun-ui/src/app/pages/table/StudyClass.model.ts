import { Injectable } from '@angular/core';
import { Adapter } from '../../utils/Adapter'

export class StudyClass {

  constructor(
    public id: number,
    public code: string,
    public name: string,
    public created: Date,
    public maximum_students: number,
    public status: boolean,
    public description: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class StudyClassAdapter implements Adapter<StudyClass> {

  adapt(item: any): StudyClass {
    return new StudyClass(
      item.id,
      item.code,
      item.name,
      item.created,
      item.maximum_students,
      item.status,
      item.description
    );
  }
}