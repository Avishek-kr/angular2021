import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',  // <courses>
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /><br/>

        {{course.title | uppercase }} <br/>
        {{course.students | number }} <br/>
        {{course.rating | number:'2.1-1'}} <br/>
        {{course.price | currency: 'INR': true: '3.2-2' }} <br/>
        {{course.releaseDate | date:'shortDate'}} <br/>

        {{text | summary:10}}

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

    course={
        title: "The complete angular course",
        rating: 4.9745,
        students: 3.123,
        price: 190.95,
        releaseDate: new Date(2020, 3, 1)
    }

    text=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi rem modi facilis quas blanditiis reiciendis debitis vel iste ab?`
}