import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  user:User=new User()
  //  title = 'hello'+localStorage.getItem('data');
  title:'Welcome to login view of music app,user login sucess'; 
  userData: any;
  msg: any;
  errorMsg: any;
  abc:any;
   //JSON.parse(localStorage.getItem('data'));
  
  constructor(private router:Router,private regService:RegistrationService) { }
  

  
  ngOnInit(): void {
    
  }

  // loginUser(){
  // console.log("Add new Employee.");
  // console.log(this.user);
  // this.regService.loginUser(this.user).subscribe(
  //   (data)=>{
  //     if (data) {
  //       this.userData = data; // Setting up user data in userData var
  //       localStorage.setItem('user', JSON.stringify(this.userData));
  //       this.abc=JSON.parse(localStorage.getItem('data'));
        
      
  //     } 
  //     else {
  //       localStorage.setItem('data', null);
  //       JSON.parse(localStorage.getItem('data'));
  //     }
  //     // localStorage.setItem(JSON.stringify(data.password),JSON.stringify(data.emailId));
  //   console.log("Data",data);
  //   this.msg=data;
  //   this.errorMsg=undefined;
   
   
    
  //       },(error)=>{
  //       this.errorMsg=error.error;
  //       console.log(this.errorMsg);
  //       this.msg=undefined;
  //             }
  //       );
       
  //   }


  gotoFavList(){ this.router.navigate(['fav'])}
  gotoEditProfile(){ this.router.navigate(['edit'])}
  // gotoSearch(){ this.router.navigate(['search'])}
  // logout(){
  //   this.router.navigate(['login']);
  //   localStorage.clear();
  // }

}

// loginUser(){
//   console.log("Add new Employee.");
//   console.log(this.user);
//   this.regService.loginUser(this.user).subscribe(
//     (data)=>{
//       if (data) {
//         this.userData = data; // Setting up user data in userData var
//         localStorage.setItem('user', JSON.stringify(this.userData));
//         JSON.parse(localStorage.getItem('data'));
        
      
//       } 
//       else {
//         localStorage.setItem('data', null);
//         JSON.parse(localStorage.getItem('data'));
//       }
//       // localStorage.setItem(JSON.stringify(data.password),JSON.stringify(data.emailId));
//     console.log("Data",data);
//     this.msg=data;
//     this.errorMsg=undefined;
   
   
    
// //         },(error)=>{
//         this.errorMsg=error.error;
//         console.log(this.errorMsg);
//         this.msg=undefined;
//               }
//         );
//        
//     }
