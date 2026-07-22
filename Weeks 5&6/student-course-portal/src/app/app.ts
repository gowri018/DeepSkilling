import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './pages/course-list/course-list';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Home,
    CourseList,
    RouterOutlet,
    EnrollmentForm,
    ReactiveEnrollment
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
}