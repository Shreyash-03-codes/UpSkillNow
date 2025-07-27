import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

   userData: any = {
    name: '',
    email: '',
    picture: '',
    given_name: '',
    family_name: '',
  
  };

   user:any;
    ngOnInit() {
     this.user = localStorage.getItem('user');
    if (this.user) {
      this.user = JSON.parse(this.user);
    
      this.userData.name=this.user.name;
      this.userData.picture=this.user.picture;
      this.userData.email=this.user.email;
      this.userData.given_name=this.user.given_name;
     this.userData.family_name=this.user.family_name;
       
    }
  }
  

}
