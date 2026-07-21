import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [

    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4
    },

    {
      id:2,
      name:'Java',
      code:'JAVA201',
      credits:3
    },

    {
      id:3,
      name:'Spring Boot',
      code:'SPR301',
      credits:4
    },

    {
      id:4,
      name:'Microservices',
      code:'MIC401',
      credits:5
    },

    {
      id:5,
      name:'Cyber Security',
      code:'CYB501',
      credits:4
    }

  ];

  selectedCourseId:number=0;

  onEnroll(id:number){

    console.log("Enrolling in Course:",id);

    this.selectedCourseId=id;

  }

}