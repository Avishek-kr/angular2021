import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',  // <courses>
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent{
    isActive= true;
    title= "List of courses";
    imageUrl="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
    colSpan=2
    courses;
    email="me@example.com";

    constructor(service: CoursesService){
        this.courses = service.getCourses()
    }

    onKeyUp(){
        console.log(this.email);
    }

    onDivClicked(){
        console.log("div is clicked")
    }

    onSave($event:any){
        $event.stopPropagation();
        console.log("button was Clicked", $event)
    }
}