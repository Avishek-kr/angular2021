import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',  // <courses>
    template: `
    <div (click)="onDivClicked()">
        <button class="btn btn-primary" (click)="onSave($event)"> Save</button>
        </div>
    `
})
export class CoursesComponent{
    isActive= true;
    title= "List of courses";
    imageUrl="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
    colSpan=2
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses()
    }

    onDivClicked(){
        console.log("div is clicked")
    }

    onSave($event:any){
        $event.stopPropagation();
        console.log("button was Clicked", $event)
    }
}