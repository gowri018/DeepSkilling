import { Component, OnInit } from '@angular/core';
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
export class CourseList implements OnInit {

  isLoading = false;

  selectedCourseId = 0;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Microservices',
      code: 'MIC401',
      credits: 5,
      gradeStatus: 'failed'
    },
    {
      id: 5,
      name: 'Cyber Security',
      code: 'CYB501',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    console.log('Course List Loaded');
  }

  onEnroll(id: number): void {
    console.log('Enrolling in Course:', id);
    this.selectedCourseId = id;
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}