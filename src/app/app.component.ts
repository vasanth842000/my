import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './service/student.service';

export class StudentModel
{
  id:any;
  firstName!: string;
  lastName!:string;
  city!:string;
  role!:string;
  location!:string;
}

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  studentList:StudentModel[]=[];

  constructor(private studentService:StudentService){}

  student:StudentModel=new StudentModel();

  onSubmit(form:NgForm):void
  {
    console.log(form.value);
    this.studentService.Create(form.value)
    .subscribe(resp => {
      console.log(resp);
      form.resetForm();
      
    })
  }
  GetAll():void 
  {
    this.studentService.GetAll()
    .subscribe(resp => {
      console.log(resp);
      this.studentList=resp;
    })
  }
  ngOnInit(): void {
    this.GetAll();
  }
}
