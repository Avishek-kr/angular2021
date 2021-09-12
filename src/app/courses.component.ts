import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',  // <courses>
    template: `<h2>{{ title }}</h2>
    <img [src]="imageUrl" />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    `
})
export class CoursesComponent{
    title= "List of courses";
    imageUrl="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses()
    }
}