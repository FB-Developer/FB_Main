import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SubjectlistService {
  constructor() { }
  //private subjectListSource = new Subject<string>();
  autoSubjectList=[];
  //subjectList = this.subjectListSource.asObservable();
    // updateSubjectList(info :any) {
    //   this.subjectListSource.next(info);
    // }
}
