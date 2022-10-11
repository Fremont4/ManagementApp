import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  createRegisterForm!: FormGroup;

  constructor(private http: HttpClient,private route: ActivatedRoute, private registrationServices: RegistrationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm = this.fb.group({
      FirstName: '',
      SecondtName: '',
      Username: '',
      Email: '',
      Phone: 0,
      Department: '',
      Password: '',
    })
  }
  addUser(){
    this.registrationServices.addUsers(this.createRegisterForm.value)
    .subscribe({
      next: (response: any)=>{
        this.router.navigate(['/login'])
        response(alert('Registration successful'));
      }
    })
  }

}
