import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { AppService } from '../app-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  imports: [Navbar],
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class Logout {
  constructor(private appService:AppService,private router:Router){}

  ngOnInit(){
 this.appService.loggedIn=false;
 this.router.navigate([''])
  }
}
