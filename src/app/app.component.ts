import { Component, inject, OnInit } from '@angular/core';
import { User } from './Models/user-model.interface';
import { UserCardComponent } from "./user-card/user-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailVailidateDirective } from "./Directives/email-validate.directive";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, CommonModule, FormsModule, EmailVailidateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'UserCards';
  searchEmail : string = '';
  fileredEmail: User[];
  users: User[] = [];
  //without Json file
  // users: User[] = [
  //   { userName: 'User1', email: 'user1@example.com', phone: '123-456-7890', verified: true },
  //   { userName: 'User2', email: 'user2@example.com', phone: '234-567-8901', verified: false },
  //   { userName: 'User3', email: 'user3@example.com', phone: '345-678-9012', verified: true },
  //   { userName: 'User4', email: 'user4@example.com', phone: '456-789-0123', verified: true }
  // ];

  http = inject(HttpClient);

  constructor(){
    this.fileredEmail = this.users;
  }


  ngOnInit(): void {
    this.http.get<User[]>('assets/users.json').subscribe((data) => {
      this.users = data;
      this.fileredEmail = data;
    })
  }

  filterEmail(){
    if(!this.searchEmail){
      this.fileredEmail = this.users;
    }else{
      this.fileredEmail = this.users.filter((searchedemail) => {
       return searchedemail.email.toLocaleLowerCase().includes(this.searchEmail.toLowerCase());
      })
      console.log(this.fileredEmail);
    }
  }

  resetSearch(){
    this.searchEmail = '';
    this.fileredEmail = this.users;
  }

}
