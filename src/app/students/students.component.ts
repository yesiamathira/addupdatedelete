import { Component, OnInit } from '@angular/core';
 import Student from '../student';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router: Router) { }
  student:any={};
  students;
  ngOnInit() {
  
    {
      this.resetStudent();
      this.students=[{id:1 ,firstName:'Athi',lastName:'Bala', email:'ath@gmail.com',phone:'111'},
        {id:2, firstName:'Athi', lastName:'Balan', email:'ath@gmail.com',phone:'222'}]
      }
    } 
  onLogout(){
    this.router.navigate(['/login']);
  }
    
      resetStudent(){
      this.student={
        id: 0,
        firstName:'',
        lastName:'',
        email:'',
        phone :'' ,
      }
      }
      deleteallStudents(){
        this.students=[];
        }
        
        deleteLastStudent(id){
        var list=[];
        for(var i=0;i<this.students.length;i++){
        if(id!=this.students[i].id){
              list.push(this.students[i]);
               }
            
              }
              this.students=list;
            }
        
        //   addStudent(){
        //     this.students.push(this.student);
        //     this.resetStudent();
        // }
        

        addUpdateStudent(){ 
          var update = false;
          if(this.student.id == 0){
            this.student.id = Math.round(Math.random()*1000);
          }
          for(var i=0 ;i<this.students.length;i++){
            if(this.student.id == this.students[i].id){
              update = true;
              this.students[i]=this.student;
              break;
            }
          }
          if(!update){
            this.students.push(this.student);
          }
            this.resetStudent();
        }
        
        editStudent(student){
          this.student = student;
        }



  }
































