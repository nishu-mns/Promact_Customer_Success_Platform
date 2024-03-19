import { Component } from '@angular/core';
import { ProjectService } from '../Service/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css'
})
export class NewProjectComponent {

firstFormGroup!: FormGroup;

constructor(private formBuilder: FormBuilder, private projectService: ProjectService, public router:Router) {}

ngOnInit() {
  this.firstFormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Description: ['', Validators.required],
    Client: ['', Validators.required],
    status: ['', Validators.required],
    projectManager: ['', Validators.required],
    startedOn:['',Validators.required],
    members:['',Validators.required]
  });
}

submitForm() {
  if (this.firstFormGroup.valid) {
    this.projectService.createProject( this.firstFormGroup.value).subscribe(
      (response: any) => {
        console.log(response);
        // Reset the form
        this.firstFormGroup.reset();
      },
      error => {
        console.error(error);
      }
      );
      this.router.navigate(["/"]);
  } else { 
    console.log("error in project creating...");
  }
}
}
