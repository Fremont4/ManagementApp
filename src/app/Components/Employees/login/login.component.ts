import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createLoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit(): void {
    this.createLoginForm = this.fb.group({
      Username: '',
      Password: '',
    })
  }

  loginUser(){
    this.registrationService.loginUsers(this.createLoginForm.value)
    .subscribe({
      next: (response: any)=>{
        // this.router.navigate(['/dashboard'])
        response(alert('Login successful'));
      }
    })
  }

}
