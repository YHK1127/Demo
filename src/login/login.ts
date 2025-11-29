import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppService } from '../app-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
constructor(private appService:AppService,private router:Router){}
  validateUser(){
    this.appService.loggedIn=true;
    this.router.navigate(['/PromotionCode']);
  }
}
