import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly URL:string="http://localhost:3000/Students";

  constructor(private http:HttpClient) { }

  Create(data:StudentModel):Observable<StudentModel>
  {
    return this.http.post<StudentModel>(this.URL,data)
  }
  GetAll():Observable<StudentModel[]>
  {
    return this.http.get<StudentModel[]>(this.URL);
  }

}
