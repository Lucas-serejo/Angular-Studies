import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface';
import { UserCardComponent } from '../components/user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  searchTerm: string = '';

  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.http.get<User[]>('assets/users.json').subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)
    );
  }



}
